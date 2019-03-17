import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Dimensions } from 'react-native'

export default class MyButton extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <TouchableOpacity style={styles.touchables} onPress={this.props.onPress}>
          <Text style={{fontSize:25, color: '#0033ff'}}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

var width = Dimensions.get('window').width; 

const styles = StyleSheet.create({
  touchables: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:5,
    marginVertical: 1,
    width: width*.97,
    padding: 10,
    opacity: 0.97,
  },
  container: {
    alignSelf: 'center',
  }
})
