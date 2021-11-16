import React from 'react';
import {ScrollView, View} from 'react-native';

import {useLikedCharacters} from '../providers/index';
import {CharacterListItem} from '@components';

function CharactersScreen({navigation}) {
  const [likedCharacters] = useLikedCharacters();

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{margin: 16}}>
        {likedCharacters.map(character => (
          <CharacterListItem key={character.id} {...character} navigation={navigation} />
        ))}
      </View>
    </ScrollView>
  );
}

export default CharactersScreen;
