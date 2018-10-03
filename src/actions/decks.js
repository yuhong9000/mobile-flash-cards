import { saveDeckTitle, removeDeckTitle } from '../util/api'
import { Alert } from 'react-native'

export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const REMOVE_DECK = 'REMOVE_DECK'

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
        );
      })
  }
}

export function removeDeck(title){
  return {
    type: REMOVE_DECK,
    title,
  }
}

export function updateRemoveDeck(title){
  return (dispatch) => {
    removeDeckTitle(title)
      .then(() => {
        dispatch(removeDeck(title));
      },(result) => {
        Alert.alert(
          'Error',
          result,
        );
      })
  }
}
