import React, {useState} from 'react';
import {View, Text, Pressable, ScrollView, StyleSheet, useColorScheme} from 'react-native';
import {useQuery} from '@apollo/client';
import {NavigationProp, RouteProp} from '@react-navigation/native';

import {CHARACTER_QUERY} from '@queries';
import {HeartIcon} from '@assets';
import {useLikedCharacters} from '@providers';
import {Loader} from '@components';
import {Colors} from '@style';

interface CharacterScreenProps {
  route: RouteProp<{params: {characterId: string}}>;
  navigation: NavigationProp<any>;
}

interface Movie {
  id: string;
  title: string;
}

function CharacterScreen({navigation, route}: CharacterScreenProps) {
  const {characterId} = route.params;
  const [likedCharacters, setLikedCharacters] = useLikedCharacters();
  const [liked, setLiked] = useState<Boolean>(!!likedCharacters.find(character => character.id === characterId));
  const {data = {}, loading} = useQuery(CHARACTER_QUERY, {variables: {id: characterId}});
  const isDarkMode = useColorScheme() === 'dark';

  const {name, id, height, mass, homeworld, filmConnection, birthYear} = data.person || {};
  return loading ? (
    <Loader />
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.subheader}>
          <Text
            style={{
              ...styles.title,
              color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack,
            }}
          >
            {name}
          </Text>
          <Pressable
            onPress={() => {
              if (liked) {
                // remove from lis
                setLikedCharacters(cList => {
                  return cList.filter(character => character.toString() !== {name, id}.toString());
                });
              } else {
                // add to list
                setLikedCharacters(cList => {
                  if (cList.find(character => character.id === id)) {
                    return cList;
                  }
                  return [...cList, {name, id}];
                });
              }
              setLiked(!liked);
            }}
            style={styles.likeButton}
          >
            <HeartIcon color={liked ? 'red' : 'transparent'} />
          </Pressable>
        </View>

        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>birth year: {birthYear}</Text>

        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>height: {height} cm</Text>
        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>mass: {mass} kg</Text>
        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>home world: {homeworld.name}</Text>
        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>movies: </Text>
        {filmConnection.films.map((film: Movie) => (
          <Pressable
            key={film.id}
            style={{flex: 1, margin: 4, backgroundColor: Colors.blueR2}}
            onPress={() => {
              navigation.navigate('Episode', {movieId: film.id});
            }}
          >
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.movieTitle}>{film.title}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

export default CharacterScreen;

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1, margin: 16},
  title: {flex: 6, fontSize: 32, fontWeight: 'bold', marginBottom: 16},
  crawl: {marginVertical: 32, fontStyle: 'italic'},
  subheader: {flexDirection: 'row', marginBottom: 16},
  likeButton: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 8,
    alignItems: 'center',
  },
  movieTitle: {fontSize: 18},
});
