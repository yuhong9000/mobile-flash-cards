import { addCardToDeck } from '../util/api'

export const ADD_CARD = 'ADD_CARD'

export function addCard(title, card){
  return {
    type: ADD_CARD,
    title,
    card,
  }
}

export function updateNewCard(title, card){
  return (dispatch) => {
    addCardToDeck(title, card)
      .then(({title,card})=>{
        dispatch(addCard(title, card))
      })
  }
}
