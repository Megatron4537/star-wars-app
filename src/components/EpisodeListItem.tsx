import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {Colors} from '@style';

interface EpisodeListItemProps {
  title: string;
  releaseDate: string;
  episodeID: string;
  id: string;
  openingCrawl: string;
  navigation: NavigationProp<any>;
}

function EpisodeListItem({title, releaseDate, episodeID, id, openingCrawl, navigation}: EpisodeListItemProps) {
  return (
    <Pressable
      style={{
        flex: 1,
        marginHorizontal: 16,
        marginVertical: 8,
        backgroundColor: Colors.blueR2,
      }}
      onPress={() => {
        navigation.navigate('Episode', {movieId: id});
      }}
    >
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin: 16}}>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 22, fontWeight: 'bold'}}>{title} </Text>
          <Text style={{fontSize: 14}}>Episode {episodeID}</Text>

          <Text style={{fontSize: 12, marginTop: 16}}>{openingCrawl.slice(0, 50)}...</Text>
        </View>
        <Text style={{flex: 1, fontSize: 16, textAlign: 'right', alignSelf: 'center', margin: 16}}> {releaseDate}</Text>
      </View>
    </Pressable>
  );
}

export default EpisodeListItem;
