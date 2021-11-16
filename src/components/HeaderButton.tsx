import React from 'react';
import {GestureResponderEvent, Pressable, Text, StyleSheet} from 'react-native';

interface HeaderButtonProps {
  onPress: (event: GestureResponderEvent) => void;
  text: string;
}

function HeaderButton({onPress, text}: HeaderButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress} testID="headerButton">
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 64,
    height: 40,
    backgroundColor: 'rgba(80,80,80,0.2)',
    borderColor: '#888',
    borderWidth: 1,
    shadowColor: 'gray',
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 12},
});

export default HeaderButton;
