import React, {Component} from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text, ScrollView,
  Dimensions
} from 'react-native';
import CardFlip from 'react-native-card-flip';
import TouchableScrollView from './UI/TouchableScrollView'


class QuestionCard extends Component{
  render(){
    const { question, answer, navigate } = this.props;
    return (
      <CardFlip style={styles.container} ref={(card) => this.card = card} >
        <TouchableScrollView
          viewStyle={styles.card}
          textStyle={styles.front}
          text={question}
          onPress={() => this.card.flip()}
          />
        <TouchableScrollView
          viewStyle={styles.card}
          textStyle={styles.back}
          text={answer}
          onPress={() => this.card.flip()}
          />
      </CardFlip>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    height: '90%',
    alignSelf: 'center',
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: 5,
    borderColor: '#d6d7da',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity:0.5,
    padding: 10,
  },
  cardBack: {
    alignItems: 'center',
  },
  front: {
    fontSize: 30,
    color: 'black',
  },
  back: {
    fontSize: 20,
    color: 'black',
  }
});

export default QuestionCard;
