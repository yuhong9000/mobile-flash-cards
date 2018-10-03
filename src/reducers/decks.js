import { ADD_DECK, RECEIVE_DECKS, REMOVE_DECK } from '../actions/decks'
import { ADD_CARD } from '../actions/cards'

export default function deck(state=[], action) {
  switch(action.type){
    case ADD_DECK:
      return{
        ...state,
        [action.deck.title]: action.deck,
      }
    case RECEIVE_DECKS:
      return action.decks
    case ADD_CARD:
      return {
        ...state,
        [action.title]:{
          ...state[action.title],
          cards: state[action.title].cards.concat(action.card),
        }
      }
    case REMOVE_DECK:
      const { [action.title]: _, ...decks } = state;
      return decks;
    default:
      return state;
  }
}
