import { createStackNavigator } from 'react-navigation'
import SettingView from '../SettingView'

const SettingStack = createStackNavigator({
  Setting: {
    screen: SettingView,
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

export default SettingStack
