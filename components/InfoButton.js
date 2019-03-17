import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class InfoButton extends Component {
  render() {
    return (
      <TouchableOpacity style={[styles.btn, this.props.style]} onPress={this.props.onPress}>
        <Text style={{fontWeight:'bold', color:'white', fontSize: 15}}>i</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  btn: {  
    height: 20,
    width: 20,
    borderRadius: 20,
    backgroundColor: 'gray',
    alignItems:'center',
    justifyContent:'center',
    margin: 15,
  }
});
