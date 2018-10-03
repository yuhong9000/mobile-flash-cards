import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import { connect } from 'react-redux'
import CardView from './CardView'
import Swiper from 'react-native-swiper'


class ReviewCardsView extends React.Component{
  static navigationOptions = ({navigation}) => {
    const index = navigation.getParam('index')?
      navigation.getParam('index'): 0;

    const count = navigation.getParam('count')?
      navigation.getParam('count'): 0;


    return {
      title: `${index+1}/${count}`,
      headerTitleStyle: {
        fontSize: 25,
      }
    }
  }

  state = {
    index: 0,
  }

  componentDidMount = () => {
    this.props.navigation.setParams({index:0, count:this.props.count});
  }

  render(){
    const { navigation, title, count, decks } = this.props;
    const { index } = this.state;

    return (
      <View style={{flex:1}}>
        <Swiper
          showsButtons={true}
          showsPagination={false}
          loop={false}
          loadMinimal={true}
          loadMinimalSize={2}
          onIndexChanged={(index) => {navigation.setParams({index})}}
          >
          {decks[title].cards.map((item)=>(
            <CardView key={item.id} question={item.question} answer={item.answer} />
          ))}
       </Swiper>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    width: '100%',
    backgroundColor: '#fff',
    fontSize: 20,
    padding: 10,
  },
});

function mapStateToProps({decks},{navigation}){
  const { title } = navigation.state.params;
  return {
    decks,
    title,
    count: decks[title].cards.length,
    navigation,
  }
}

export default connect(mapStateToProps)(ReviewCardsView);
