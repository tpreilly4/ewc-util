import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, StyleSheet, ScrollView, StatusBar, Linking } from 'react-native';
import PanelView from '../components/PanelView';
import APP_STRINGS from '../strings';

export default class ContactUsScreen extends Component {
  render() {
    
    const callUsButtons = [
      {
        id: 1,
        title: "Call Us",
        onPress:()=>Linking.openURL(`tel:${18004463110}`),
      },
    ];
    const contactTechButtons = [
      {
        id: 1,
        title: "Email Tech Support",
        onPress:()=>Linking.openURL('mailto:tech@ewccontrols.com?'),
      },
    ];
    const contactWarrantyButtons = [
      {
        id: 1,
        title: "Email a Warranty Inquiry",
        onPress:()=>Linking.openURL('mailto:returns@ewccontrols.com?subject=Warranty Inquiry'),
      },
    ];
    const contactSalesButtons = [
      {
        id: 1,
        title: "Email Sales",
        onPress:()=>Linking.openURL('mailto:sales@ewccontrols.com?'),
      },
    ];
    const contactAccountingButtons = [
      {
        id: 1,
        title: "Email Accounting",
        onPress:()=>Linking.openURL('mailto:accounting@ewccontrols.com?'),
      },
    ];
    const contactDevButtons = [
      {
        id: 1,
        title: "Email App Developer",
        onPress:()=>Linking.openURL('mailto:dev@ewccontrols.com?subject=Mobile App Feedback'),
      },
    ];


    return (
      <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={styles.container}>
          <SafeAreaView style={{flex: 1}}>
          <StatusBar barStyle="light-content" />
            <ScrollView style={{flex: 1}}>
              <PanelView title="Phone" text={APP_STRINGS.STRING_CONTACT_CALLUS} buttonList={callUsButtons}/>
              <PanelView title="Tech Support" text="Having an issue with one of our products? Send our tech support team an email." buttonList={contactTechButtons}/>
              <PanelView title="Warranty" text="Want to make a warranty inquiry? Send our returns department an email." buttonList={contactWarrantyButtons}/>
              <PanelView title="Sales" text="Have a question about purchasing one of our products? Send our sales team an email." buttonList={contactSalesButtons}/>
              <PanelView title="Accounting" text="Have questions about your account with us? Send our accounting department an email." buttonList={contactAccountingButtons}/>
              <PanelView title="Submit App Feedback" text="Have some feedback about our new mobile app? Send the development team an email." buttonList={contactDevButtons} style={{paddingBottom: 10}}/>
            </ScrollView>
          </SafeAreaView>
        </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
})
