import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

export default function SubmitBtn(props){
  const { text, onPress } = props;

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={onPress}
      >
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 20,
    color: 'white',
  },
  box: {
    width: 200,
    margin: 15,
    alignItems: 'center',
    backgroundColor: 'black',
    borderWidth: 5,
    borderRadius: 5,
  },
});
