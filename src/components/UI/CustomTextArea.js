import React from 'react';
import {
  StyleSheet, Text, View,
  TextInput, KeyboardAvoidingView
} from 'react-native';

export default class CustomTextArea extends React.Component{

  render(){
    const { value, onChangeText, style } = this.props;

    return(
      <TextInput
        {...this.props}
        style={[style]}
        />
    )
  }
}
