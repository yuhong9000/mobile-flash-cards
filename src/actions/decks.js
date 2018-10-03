import { saveDeckTitle } from '../util/api'
import { Alert } from 'react-native'

export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'


export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function receiveDecks(decks){
  return {
    type: RECEIVE_DECKS,
    decks,
  }
}

export function updateNewDeck(title){
  const deck = {
    title,
    cards: [],
  }

  return (dispatch) => {
    saveDeckTitle(title)
      .then(() => {
        dispatch(addDeck(deck));
      },(result) => {
        // rejection is caused by duplicated deck titles
        Alert.alert(
          'Error',
          'Unable to create a duplicate deck',
        )
      })
  }
}
