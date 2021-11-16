import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {EpisodesScreen, EpisodeScreen, CharactersScreen, CharacterScreen} from '@screens';
import {CharacterIcon, MovieIcon} from 'assets';
import HeaderButton from './HeaderButton';

const Tab = createBottomTabNavigator();

function BottomTabsNavigator(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName={'Episodes'}
      screenOptions={{
        tabBarActiveTintColor: 'white',
        headerTitleAlign: 'center',
      }}
    >
      <Tab.Screen
        name="Episodes"
        component={EpisodesScreen}
        options={{
          tabBarTestID: 'EpisodesTab',
          tabBarIcon: ({focused}) => <MovieIcon color={focused ? 'white' : '#888'} />,
        }}
      />
      <Tab.Screen
        name="Liked characters"
        component={CharactersScreen}
        options={{
          tabBarTestID: 'CharactersTab',
          tabBarIcon: ({focused}) => <CharacterIcon color={focused ? 'white' : '#888'} />,
        }}
      />
      <Tab.Screen
        name="Episode"
        component={EpisodeScreen}
        options={({navigation}) => ({
          unmountOnBlur: true,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
          headerLeft: () => <HeaderButton onPress={() => navigation.goBack()} text="Go back" />,
        })}
      />
      <Tab.Screen
        name="Character"
        component={CharacterScreen}
        options={({navigation}) => ({
          unmountOnBlur: true,
          tabBarButton: () => null,
          tabBarStyle: {display: 'none'},
          headerLeft: () => <HeaderButton onPress={() => navigation.goBack()} text="Go back" />,
        })}
      />
    </Tab.Navigator>
  );
}

export default BottomTabsNavigator;
