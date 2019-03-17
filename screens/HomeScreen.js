import React, {Component} from 'react';
import APP_STRINGS from '../strings';
import { StatusBar, StyleSheet, ImageBackground, SafeAreaView, ScrollView, Image, Dimensions, Linking} from 'react-native';
import PanelView from '../components/PanelView';
import Disclaimer from '../components/Disclaimer';

class HomeScreen extends Component {
    render() {

      const DuctDesign = '../images/LP-118.pdf'

      const bpcButtons = [
        {
          id: 1,
          title: "Bypass Calculator",
          onPress:()=>{this.props.navigation.navigate('BypassCalculator')},
        },
        {
          id: 2,
          title:"Learn More",
          onPress:()=>{this.props.navigation.navigate('LearnMore')},
        },
        {
          id: 3,
          title:"Duct Design",
          onPress:()=>{this.props.navigation.navigate('DuctDesign')},
        },
      ];

      const zspButtons = [
        {
          id: 0,
          title: "Control Panel Finder",
          onPress:()=>{this.props.navigation.navigate('ControlPanelsResidential')},
        },
        {
          id: 1,
          title: "UZC Zoning System",
          onPress:()=>{this.props.navigation.navigate('ControlPanelsCommercial')},
        },
        {
          id: 2,
          title:"Supply Dampers",
          onPress:()=>{this.props.navigation.navigate('SupplyDampers')},
        },
        {
          id: 3,
          title:"Thermostats",
          onPress:()=>{this.props.navigation.navigate('Thermostats')},
        },
        {
          id: 4,
          title:"Transformers",
          onPress:()=>alert("Transformers coming soon!"),
        },
        {
          id: 5,
          title:"Bypass Dampers",
          onPress:()=>{this.props.navigation.navigate('BypassCalculator')},
        },
      ];

      const ctcButtons = [
        {
          id: 1,
          title: "Contact Us",
          onPress:()=>{this.props.navigation.navigate('ContactUs')},
        },
      ];
      
      const manButtons = [
        {
          id: 1,
          title: "Go",
          onPress:()=>Linking.openURL('https://ewccontrols.com/user-manuals-and-technical-bulletins/'),
        },
      ];
      
      return (
        <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={styles.container}>
          <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="light-content" />
            <ScrollView style={{flex: 1}}>
              <Image source={require('../images/ewc_logo_white_by_support.png')} style={styles.logoImage}/>
              <PanelView title="Bypass Calculator"text={APP_STRINGS.STRING_BPC_HOMESCREEN}buttonList={bpcButtons}/>
              <PanelView title="Zoning System Products"text={APP_STRINGS.STRING_ZSP_HOMESCREEN}buttonList={zspButtons}/>
              <PanelView title="Contact Us"text={APP_STRINGS.STRING_CONTACT_HOMESCREEN}buttonList={ctcButtons}/>
              <PanelView title="Product Manuals"text={APP_STRINGS.STRING_MANUAL_HOMESCREEN}buttonList={manButtons}/>
              <Disclaimer style={{marginTop:10}}text={APP_STRINGS.STRING_DISCLAIMER_HOMESCREEN}/>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
      );
    }
  }
  // <Button title="test"onPress={()=>this.props.navigation.navigate('Test')}/>

  export default HomeScreen;
  
  const win = Dimensions.get('window');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    logoImage: {
      flex: 2,
      resizeMode: 'contain',
      alignSelf: 'center',
      width: win.width-50,
      height: 175,
      marginTop: 15,
    },
  });