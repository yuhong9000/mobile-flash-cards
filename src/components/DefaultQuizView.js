import React from 'react';
import {
  StyleSheet, View, Text, Alert
} from 'react-native';
import { connect } from 'react-redux'
import CardView from './CardView'
import SubmitBtn from './UI/SubmitBtn'

class DefaultQuizView extends React.Component{
  static navigationOptions = ({navigation}) => {
    const index = navigation.getParam('index')?
      navigation.getParam('index'): 0;

    const count = navigation.getParam('count')?
      navigation.getParam('count'): 0;

    return {
      title: index < count ? `${index+1}/${count}`: `Result`,
      headerTitleStyle: {
        fontSize: 25,
      }
    }
  }

  state = {
    index: 0,
    correct: 0,
  }

  componentDidMount = () => {
    this.props.navigation.setParams({index:0, count:this.props.count});
  }

  handleCorrect = () => {
    this.props.navigation.setParams({index:this.state.index+1});
    this.setState((state)=>{
      return {
        index: state.index+1,
        correct: state.correct+1,
      }
    });
  }

  handleIncorrect = () => {
    this.props.navigation.setParams({index:this.state.index+1})
    this.setState((state)=>{
      return {
        index: state.index+1,
      }
    });
  }

  handleRestart = () => {
    this.props.navigation.setParams({index:0})
    this.setState((state)=>{
      return {
        index: 0,
      }
    });
  }


  render(){
    const { navigation, title, count, decks } = this.props;
    const { index, correct } = this.state;
    const item = decks[title].cards[index];

    return (
        index < count
        ? <View style={{flex:1}}>
            <CardView key={item.id} question={item.question} answer={item.answer} />
            <View style={[styles.container,{flex:0,padding:30}]}>
              <SubmitBtn text='Correct' onPress={this.handleCorrect}/>
              <SubmitBtn text='Incorrect' onPress={this.handleIncorrect}/>
            </View>
          </View>
        : <View style={styles.container}>
            <Text style={styles.text}>Final Score</Text>
            <Text style={styles.text}>{correct}/{count}</Text>
            <SubmitBtn text='Restart' onPress={this.handleRestart}/>
          </View>

    )
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 20,
    padding: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
});

function mapStateToProps({decks},{navigation}){
  const { title } = navigation.state.params;
  return {
    decks,
    title,
    count: decks[title].cards.length,
    navigation,
  }
}

export default connect(mapStateToProps)(DefaultQuizView);
