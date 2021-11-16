import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {NavigationProp} from '@react-navigation/native';

import {Colors} from '@style';

interface CharacterListItemProps {
  name: string;
  id: string;
  navigation: NavigationProp<any>;
}

function CharacterListItem({name, id, navigation}: CharacterListItemProps) {
  return (
    <Pressable
      style={{flex: 1, margin: 4, backgroundColor: Colors.blueR2}}
      onPress={() => {
        navigation.navigate('Character', {characterId: id});
      }}
    >
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 18}}>{name}</Text>
      </View>
    </Pressable>
  );
}

export default CharacterListItem;
