import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View , Alert
} from 'react-native';
import { connect } from 'react-redux'
import SubmitBtn from './UI/SubmitBtn'
import {
  clearLocalNotification,
  setLocalNotification
} from '../util/helper'
import { updateRemoveDeck } from '../actions/decks'
import { removeDeckTitle } from '../util/api'

class DeckView extends React.Component{
  static navigationOptions = ({navigation}) => {
    const { title } = navigation.state.params;

    return {
      title: `${title}`,
      headerTitleStyle: {
        fontSize: 30,
      }
    }
  }

  handleNavigate = (destination) => {
    const { navigation, title } = this.props;
    const { navigate } = navigation;

    navigate(
      destination,
      { title }
    )
  }

  ToStudyView(title){
    const { count } = this.props;
    if(count > 0){
      clearLocalNotification()
        .then(setLocalNotification);
      this.handleNavigate(title);
    }
    else{
      Alert.alert(
        'No cards in this deck'
      )
    }
  }

  handleRemoveDeck = () => {
    const { navigation, title, dispatch } = this.props;
    const { navigate } = navigation;

    dispatch(updateRemoveDeck(title));
    navigate('Home');
  }

  OnRemoveDeck = () => {
    Alert.alert(
      'Remove Deck',
      'Are you sure to remove this deck?',
      [
        { text: 'Yes', onPress: this.handleRemoveDeck },
        { text: 'Cancel' }
      ],
      { cancelable: false }
    )
  }

  render(){
    const { navigation, title, count } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={[styles.title]}>{count} cards</Text>
        </View>
        <View style={styles.bottom}>
          <SubmitBtn text='Add Cards' onPress={()=>{this.handleNavigate('NewCardView')}}/>
          <SubmitBtn text='Review Cards' onPress={()=>{this.ToStudyView('ReviewCardsView')}}/>
          <SubmitBtn text='Start Quiz' onPress={()=>{this.ToStudyView('DefaultQuizView')}}/>
          <SubmitBtn text='Remove Deck' onPress={this.OnRemoveDeck}/>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  top: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  },
});

function mapStateToProps({decks},{navigation}){
  const { title } = navigation.state.params;
  return {
    title,
    count: decks[title].cards.length,
    navigation,
  }
}
export default connect(mapStateToProps)(DeckView);
