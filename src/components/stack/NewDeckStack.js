import React from 'react'
import { createStackNavigator } from 'react-navigation'
import NewDeckView from '../NewDeckView'

const NewDeckStack = createStackNavigator({
  NewDeckView: {
    screen: NewDeckView,
  },
},{
  headerMode: 'float',
  navigationOptions:{
    headerStyle: {
      height: 50,
    },
    headerBackTitle: 'back',
  }
})

export default NewDeckStack;
