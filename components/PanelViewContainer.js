import React, { Component } from 'react';
import { Text, StyleSheet, View} from 'react-native';
import InfoButton from './InfoButton';

export default class PanelViewContainer extends Component {
  render() {
      let titleString = `${this.props.title}`;
      let words = `${this.props.text}`;
      // let btnTitle = `${this.props.btnTitle}`;
      // let btnFunc = this.props.btnFunc;

    return (
      <View>
        <View style={styles.topContainer}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>{titleString}</Text>
          {this.props.info}
        </View>
          <Text style={styles.normalText}>{words}</Text>
        </View>
        <View style={styles.bottomContainer}>
            {this.props.children}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
      topContainer: {
        width: '97%',
        alignSelf:'center',
        justifyContent: 'center',
        backgroundColor: '#e6e6e6',
        marginTop: 15,
        marginHorizontal: 5,
        borderRadius: 15,
        borderBottomEndRadius: 5,
        borderBottomStartRadius: 5,
      },
      bottomContainer:{
        width: '97%',
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        marginTop:1,
        borderRadius: 5,
      },
      titleText: {
        color: '#000000',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 10,
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
        marginTop:10,
      },
});