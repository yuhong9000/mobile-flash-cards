import React from 'react';
import {
  StyleSheet, Text, View,
  TextInput, KeyboardAvoidingView,
  Button, Alert
} from 'react-native';
import { connect } from 'react-redux'
import { updateNewCard } from '../actions/cards'
import SubmitBtn from './UI/SubmitBtn'
import CustomTextArea from './UI/CustomTextArea'

class NewCardView extends React.Component{

  static navigationOptions = ({navigation}) => {
    // prevents warning: button must have defined onPress
    // navigation.getParm is a pattern for static navOpt to interact with class
    const handleButtonPress = navigation.getParam('ToDeckView')?
      navigation.getParam('ToDeckView'):() => {}

    return {
      title: 'New Card',
      headerTitleStyle: {
        fontSize: 30,
      },
      headerRight:(
      <Button
        onPress={handleButtonPress}
        title="Done"
        />)
    }
  }

  state = {
    question: '',
    answer: '',
  }

  componentDidMount() {
    // Allows react-navigation to use class methods
    this.props.navigation.setParams({ ToDeckView: this.ToDeckView });
  }

  ToDeckView = () => {
    const { navigation, dispatch } = this.props;
    const { title } = navigation.state.params;
    const { navigate } = navigation;
    const { question, answer } = this.state;

    // validate input
    if(question === '' || answer === ''){
      Alert.alert(
        'Error',
        'Cannot have empty fields',
      )
    }
    else{
      // update redux and database
      dispatch(updateNewCard(title, {question, answer}));

      navigate(
        'DeckView',
        { title }
      )
    }
  }

  handleQuestionChange = (question) => {
    this.setState({
      question,
    })
  }

  handleAnswerChange = (answer) => {
    this.setState({
      answer,
    })
  }

  render(){
    const { navigation } = this.props;
    const { question, answer, height } = this.state;

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container} enable>
          <View style={[styles.input,{borderBottomWidth:0}]}>
            <CustomTextArea
              placeholder='Front'
              value={question}
              style={styles.text}
              onChangeText={this.handleQuestionChange}
              autoCapitalize='none'
              maxLength={100}
              autoFocus
              />
          </View>
          <View style={[styles.input,{flex:1,height:'100%'}]}>
            <CustomTextArea
              placeholder='Back'
              value={answer}
              style={[styles.text]}
              onChangeText={this.handleAnswerChange}
              autoCapitalize='sentences'
              multiline={true}
              />
          </View>


      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  input: {
    borderWidth: 1.5,
    backgroundColor: '#fff',
    width: '100%',
  },
  text: {
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export default connect()(NewCardView);
