import React from 'react';
import {Text, ScrollView, View, useColorScheme, StyleSheet} from 'react-native';
import {useQuery} from '@apollo/client';
import {RouteProp, NavigationProp} from '@react-navigation/native';

import {EPISODE_QUERY} from '@queries';
import {CharacterListItem, Loader} from '@components';
import {Colors} from 'style';

interface EpisodeScreenProps {
  route: RouteProp<{params: {movieId: string}}>;
  navigation: NavigationProp<any>;
}

function EpisodeScreen({navigation, route}: EpisodeScreenProps) {
  const {movieId} = route.params;
  const {data = {}, loading} = useQuery(EPISODE_QUERY, {variables: {id: movieId}});

  const {
    title,
    releaseDate,
    openingCrawl,
    characterConnection,
    speciesConnection,
    planetConnection,
    vehicleConnection,
  } = data.film || {};

  const isDarkMode = useColorScheme() === 'dark';
  return loading ? (
    <Loader />
  ) : (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={{...styles.title, color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>{title}</Text>
        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>{releaseDate}</Text>
        <Text style={{...styles.crawl, color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>{openingCrawl}</Text>
        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>
          planets: {planetConnection.totalCount}
        </Text>
        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>
          vehicles: {vehicleConnection.totalCount}
        </Text>
        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>
          species: {speciesConnection.totalCount}
        </Text>
        <Text style={{color: isDarkMode ? Colors.whiteCrema : Colors.darkBlack}}>characters: </Text>

        {characterConnection.characters.map(character => (
          <CharacterListItem key={character.id} {...character} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  content: {flex: 1, margin: 16},
  title: {fontSize: 32, fontWeight: 'bold'},
  crawl: {marginVertical: 32, fontStyle: 'italic'},
});

export default EpisodeScreen;
