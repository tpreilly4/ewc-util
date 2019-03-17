import React, { Component } from 'react';
import {ImageBackground, SafeAreaView, WebView} from 'react-native';
//import { WebView } from 'react-native-webview'; having issues with this and Expo. react native's WebView component will be deprecated soon, so gotta figure it out.
import Disclaimer from '../components/Disclaimer';

export default class LearnMoreScreen extends Component {
  render() {

    return (
      <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <SafeAreaView>
            <Disclaimer text="Skip to page 6 to read about Ultra-Zone Duct Design."/>
            <WebView 
              source={{uri: 'https://ewccontrols.com/catalogs/EWC%20catalog.pdf'}}
              style={{width: '100%', alignSelf: 'center'}}/> 
        </SafeAreaView>
      </ImageBackground>
    )
  }
}