import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Tabs from './src/components/Tabs'
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './src/reducers'
import middleware from './src/middleware'

const store = createStore(reducer,middleware);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <StatusBar translucent backgroundColor='#000' barStyle='dark-content' />
          <Tabs style={{flex: 1}}/>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
