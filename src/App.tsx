import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {DarkTheme, LightTheme} from '@style';
import {BottomTabsNavigator} from '@components';
import {LikedCharactersProvider, ApolloProvider} from '@providers';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const theme = isDarkMode ? DarkTheme : LightTheme;

  return (
    <SafeAreaView style={{...styles.container, backgroundColor: theme.colors.background}}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={theme}>
        <ApolloProvider>
          <LikedCharactersProvider>
            <BottomTabsNavigator />
          </LikedCharactersProvider>
        </ApolloProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default App;
