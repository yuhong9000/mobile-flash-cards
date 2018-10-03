import React from 'react'
import {
  View, Text,
} from 'react-native'
import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from 'react-navigation'
import DeckStack from './stack/DeckStack'
import NewDeckStack from './stack/NewDeckStack'
import SettingStack from './stack/SettingStack'

const Tabs = createBottomTabNavigator({
  DeckStack: {
    screen: DeckStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeckStack,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
  Settings: {
    screen: SettingStack,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='settings' size={30} color={tintColor} />
    },
  }
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'black',
    style: {
      paddingTop: 10,
      height: 60,
      backgroundColor: 'white',
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

export default Tabs;
