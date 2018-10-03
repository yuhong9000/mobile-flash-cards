import { getInitialData } from '../util/api'
import { receiveDecks } from './decks'

export function handleInitialData(){
  return (dispatch) => {
    getInitialData()
      .then((result) => {
        dispatch(receiveDecks(result));
      })
  }
}
