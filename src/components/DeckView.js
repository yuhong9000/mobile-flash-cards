import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View , Alert
} from 'react-native';
import { connect } from 'react-redux'
import SubmitBtn from './UI/SubmitBtn'

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

  ToNewCardView = () => {
    this.handleNavigate('NewCardView');
  }

  ToReviewCardsView = () => {
    const { count } = this.props;
    if(count > 0){
      this.handleNavigate('ReviewCardsView');
    }
    else{
      Alert.alert(
        'No cards in this deck'
      )
    }
  }

  ToDefaultQuizView = () => {
    const { count } = this.props;
    if(count > 0){
      this.handleNavigate('DefaultQuizView');
    }
    else{
      Alert.alert(
        'No cards in this deck'
      )
    }
  }

  OnRemoveDeck = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;


    Alert.alert(
      'Remove Deck',
      'Are you sure to remove this deck?',
      [
        { text: 'Yes', onPress: ()=> {navigate('Home')}},
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
          <SubmitBtn text='Add Cards' onPress={this.ToNewCardView}/>
          <SubmitBtn text='Review Cards' onPress={this.ToReviewCardsView}/>
          <SubmitBtn text='Start Quiz' onPress={this.ToDefaultQuizView}/>
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
    justifyContent: 'flex-start',
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
