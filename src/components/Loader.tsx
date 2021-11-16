import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.container} testID="loader">
      <ActivityIndicator size="large" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
