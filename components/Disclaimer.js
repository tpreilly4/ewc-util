import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';

export default class Disclaimer extends Component {
  render() {
    let words = `${this.props.text}`;
    var parentStyle = this.props.style;

    return (
      <View style={[styles.container, parentStyle]}>
        <Text style={{color:'white', textAlign:'center'}}>{words}</Text>
      </View>
    )
  }
}

var width = Dimensions.get('window').width; 

const styles = StyleSheet.create({
    container: {
      width: width,
      backgroundColor: '#5667f9',
      color: 'white',
      padding: 10,
      fontWeight: 'bold',
      alignSelf:'stretch',
    }
});
