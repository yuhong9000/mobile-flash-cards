import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import QuestionCard from './QuestionCard'

class CardView extends Component{

  render(){
    const { question, answer } = this.props;
    return (
      <View
        style={styles.container}
        >
          <QuestionCard question={question} answer={answer} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CardView;
