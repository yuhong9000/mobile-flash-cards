import React, {Component} from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';


class DeckCard extends Component{
  ToDeckView = () => {
    const { navigate, title, count } = this.props;

    navigate(
      'DeckView',
      { title }
    )
  }

  render(){
    const { title, count, navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.ToDeckView}
        >
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.count}>{count} cards</Text>
      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '90%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: '#d6d7da',
    margin: 10,
  },
  title: {
    fontSize: 30,
    color: 'black',
  },
  count: {
    fontSize: 20,
    color: 'gray',
  }
});

export default DeckCard;
