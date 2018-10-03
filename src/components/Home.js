import React from 'react';
import {
  StyleSheet, Text, ScrollView, View, StatusBar,
  AsyncStorage
} from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import DeckCard from './DeckCard'

class Home extends React.Component{

  static navigationOptions = {
    title: 'Flash Cards',
    headerTitleStyle: {
      fontSize: 30,
    }
  }

  componentDidMount(){
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render(){
    const { decks, navigation } = this.props;

    return(
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        {Object.keys(decks).sort().map((i)=>(
          <DeckCard key={i} title={decks[i].title} count={decks[i].cards.length} navigate={navigation.navigate} />
        ))}
      </ScrollView>
    )
  }
}

function mapStateToProps ({decks}, {navigation}) {
  return {
    decks,
    navigation,
  }
}

export default connect(mapStateToProps)(Home);
