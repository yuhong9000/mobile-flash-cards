import { createStackNavigator } from 'react-navigation'
import DeckCard from '../DeckCard'
import DeckView from '../DeckView'
import NewCardView from '../NewCardView'
import ReviewCardsView from '../ReviewCardsView'
import DefaultQuizView from '../DefaultQuizView'
import Home from '../Home'

const DeckStack = createStackNavigator({
  Home: {
    screen: Home,
  },
  DeckView: {
    screen: DeckView,
  },
  DeckCard: {
    screen: DeckCard,
  },
  NewCardView: {
    screen: NewCardView,
  },
  ReviewCardsView: {
    screen: ReviewCardsView,
  },
  DefaultQuizView: {
    screen: DefaultQuizView,
  }
},{
  headerMode: 'float',
  navigationOptions:{
    headerStyle: {
      height: 50,
    },
    headerBackTitle: 'back',
  }
})

export default DeckStack
