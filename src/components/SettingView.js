import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { AsyncStorage } from 'react-native'
import SubmitBtn from './UI/SubmitBtn'

class SettingView extends React.Component {

  handleRemoveAll = () => {
    const { dispatch } = this.props;
    AsyncStorage.removeItem('Decks')
      .then(()=>{
        dispatch(handleInitialData());
      })
      .then(()=>{
        this.props.navigation.navigate('Home')
      })

  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <SubmitBtn text='Reset' onPress={this.handleRemoveAll}/>
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

export default connect()(SettingView);
