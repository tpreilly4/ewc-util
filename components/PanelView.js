import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity } from 'react-native';
import MyButton from './MyButton';

export default class PanelView extends Component {
  render() {
      let titleString = `${this.props.title}`;
      let words = `${this.props.text}`;

      const buttons = this.props.buttonList;

      //Parse button props into map
      const touchables = buttons.map((i) => <MyButton key={i.id} onPress={i.onPress} title={i.title}/>);

    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.titleText}>{titleString}</Text>
          <Text style={styles.normalText}>{words}</Text>
        </View>
        <View style={styles.btnContainer}>
          { touchables }
        </View>
      </View>
    )
  }
}

const win = Dimensions.get('window');


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6e6e6',
        marginTop: 15,
        marginHorizontal: 5,
        borderRadius: 15,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
        width: win.width*.97,
        alignSelf:'center'
      },
      titleText: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
        alignSelf: 'flex-start',
      },
      normalText: {
        color: '#000000',
        fontSize: 20,
        padding: 10,
        alignSelf: 'flex-start',
        marginLeft: 2,
      },
      divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
        alignSelf: 'stretch',
      },
      btnContainer:{
        marginTop:1,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      },
});