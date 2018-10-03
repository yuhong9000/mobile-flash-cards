import React, {Component} from 'react';
import {
  StyleSheet, TouchableOpacity, View, Text, ScrollView,
  Dimensions
} from 'react-native';

const height = Dimensions.get('window').height * 0.85;

class TouchableScrollView extends Component{
  state = {
    textHeight: 0,
    viewHeight: 0,
  }

  handleTextOnLayout = (e) => {
    this.setState({
      textHeight: e.nativeEvent.layout.height
    })
  }

  handleViewOnLayout = (e) => {

    this.setState({
      viewHeight: e.nativeEvent.layout.height
    })
  }

  render(){
    // disable scroll if text doesn't exceed view's height
    const scrollEnabled = this.state.textHeight > this.state.viewHeight;
    const { text, viewStyle, textStyle, onPress } = this.props;
    return (
      <View style={[viewStyle]} onLayout={this.handleViewOnLayout}>
        <ScrollView
          style={{width:'100%'}}
          contentContainerStyle={{flexGrow:1,justifyContent:'center'}}
          scrollEnabled={scrollEnabled}
          >
          <TouchableOpacity style={{alignSelf:'center'}} activeOpacity={1} onPress={onPress}>
            <Text style={textStyle} onLayout={this.handleTextOnLayout}>{text}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

export default TouchableScrollView;
