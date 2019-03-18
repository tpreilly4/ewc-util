import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import APP_STRINGS from '../strings';

export default class LearnMoreScreen extends Component {
  render() {

    return (
      <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <SafeAreaView>
          <ScrollView style={{flex:1}}>
            <View>
        <View style={styles.container}>
          <Text style={styles.titleText}>Relief Strategies</Text>
          <View style={styles.divider}></View>

          <View style={{backgroundColor:'white'}}>
            <Text style={styles.subtitleText}>Bypass Duct</Text>
            <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_BYPASSDUCT}</Text>

            <Text style={styles.subtitleText}>Dump Zone</Text>
            <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_DUMPZONE}</Text>

            <Text style={styles.subtitleText}>Distributed Relief</Text>
            <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_DISTRIBUTEDRELIEF}</Text>

            <Text style={styles.subtitleText}>Over Blow</Text>
            <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_OVERBLOW}</Text>

            <Text style={styles.subtitleText}>Selective Throttling</Text>
            <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_SELECTIVETHROTTLING}</Text>
          </View>

          <View style={styles.divider}/>
          <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_RELIEFSTRATEGIESBOTTOMTEXT}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.titleText}>Demand Strategies</Text>
          <View style={styles.divider}></View>

          <View style={{backgroundColor:'white'}}>
            <Text style={styles.subtitleText}>Capacity Control</Text>
            <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_CAPACITYCONTROL}</Text>

            <Text style={styles.subtitleText}>Revise Zoning Plan</Text>
            <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_REVISEZONINGPLAN}</Text>
          </View>
          <View style={styles.divider}/>
          <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_A}</Text>
          <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_B}</Text>
          <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_C}</Text>
          <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_D}</Text>
          <Text style={styles.normalText}>{APP_STRINGS.STRING_LEARNMORE_DEMANDSTRATEGIESBOTTOMTEXT_E}</Text>
        </View>
      </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '97%',
    alignSelf:'center',
    justifyContent: 'center',
    backgroundColor: '#e6e6e6',
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
    borderRadius: 15,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5,
  },
  titleText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    padding: 10,
    alignSelf: 'center'
  },
  subtitleText: {
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
  },
  normalText: {
    color: '#000000',
    marginLeft: 10,
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
})
