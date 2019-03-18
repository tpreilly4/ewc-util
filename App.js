/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './screens/HomeScreen';
import BypassCalculatorScreen from './screens/BypassCalculatorScreen';
import ControlPanelsCommercialScreen from './screens/ControlPanelsCommercialScreen';
import SupplyDampersScreen from './screens/SupplyDampersScreen';
import ThermostatsScreen from './screens/ThermostatsScreen';
import ControlPanelsResidentialScreen from './screens/ControlPanelsResidentialScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import LearnMoreScreen from './screens/LearnMoreScreen';
import DuctDesignScreen from './screens/DuctDesignScreen';
import TransformersScreen from './screens/TransformersScreen';

const win = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: () => ({
      title: `EWC Controls Inc. ®`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  BypassCalculator:{
    screen: BypassCalculatorScreen,
    navigationOptions: () => ({
      title: `Bypass Calculator`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  LearnMore:{
    screen: LearnMoreScreen,
    navigationOptions: () => ({
      title: `Managing Excess Airflow`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  DuctDesign:{
    screen: DuctDesignScreen,
    navigationOptions: () => ({
      title: `Duct Design`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  ControlPanelsCommercial:{
    screen: ControlPanelsCommercialScreen,
    navigationOptions: () => ({
      title: `UZC Zoning System`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  ControlPanelsResidential:{
    screen: ControlPanelsResidentialScreen,
    navigationOptions: () => ({
      title: `Control Panel Finder`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  SupplyDampers:{
    screen: SupplyDampersScreen,
    navigationOptions: () => ({
      title: `Supply Dampers`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  Thermostats:{
    screen: ThermostatsScreen,
    navigationOptions: () => ({
      title: `Thermostats`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  Transformers:{
    screen: TransformersScreen,
    navigationOptions: () => ({
      title: `Transformers`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
  ContactUs:{
    screen: ContactUsScreen,
    navigationOptions: () => ({
      title: `Contact Us`,
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0033ff',
      },
    }),
  },
});

const AppContainer = createAppContainer(AppNavigator);

