import { AsyncStorage } from 'react-native'

function generateID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export function getDecks(){
  return AsyncStorage.getItem('Decks');
}

export function getDeck(id){
  return AsyncStorage.getItem('Decks')
    .then((result) => (
      JSON.parse(result)[id]
    ))
}

export function saveDeckTitle(title){
  return AsyncStorage.getItem('Decks')
    .then((result)=>{
      const decks = JSON.parse(result);
      console.log(decks, title);
      if(decks === null){
        console.log("OH NO")
        return AsyncStorage.setItem('Decks',JSON.stringify({
          [title]: {
            title,
            cards:[],
          }
        }))
      }
      else if(!(title in decks)){
        return AsyncStorage.mergeItem('Decks',JSON.stringify({
          [title]: {
            title,
            cards:[],
          }
        }))
      }
      else{
        return Promise.reject(result);
      }
    },(e)=>{
      console.log(e);
    })

}

export function addCardToDeck(title,card){
  const id = generateID();
  return AsyncStorage.getItem('Decks')
    .then((result)=>{
      const decks = JSON.parse(result);
      if(title in decks){
        return AsyncStorage.mergeItem('Decks',JSON.stringify({
          ...decks,
          [title]: {
            ...decks[title],
            cards: decks[title].cards.concat({id,...card}),
          }
        }))
          .then(()=>({
            title,
            card: {
              id,
              ...card,
            }
          }),e => {
            console.log(e);
          })
      }
    },e => {
      console.log(e);
    })
}

export function getInitialData(){
  return getDecks()
    .then((result) => (JSON.parse(result)))
}
