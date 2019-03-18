import React, { Component } from 'react'
import { Text, ImageBackground, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Slider, Picker, Modal, Linking } from 'react-native'
import PanelViewContainer from '../components/PanelViewContainer';
import APP_STRINGS from '../strings';
import Disclaimer from '../components/Disclaimer';
import MyButton from '../components/MyButton';
import productImages from '../images/index';
import ProductOutputModal from '../components/ProductOutputModal';

class ControlPanelsResidentialScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      stageCool: 1,
      stageHeat: 1,
      numZones: 2,
      modalVisible: false,
      panelOutput: '',
    };
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

      /*   * UPPER BOUNDS *   
    
    NCM     : 2 Heat
            : 1 Cool
            : 3 Zones
      
    BMPLUS  : 3 Heat
            : 2 Cool
            : 7 Zones

    UZC     : 4 Heat
            : 2 Cool
            : 22 Zones
    
    UZC will be suggested every time. Title will be modified depending on # zones only.
    */

  getControlPanel = () => {

    const cool = +this.state.stageCool;
    const heat = +this.state.stageHeat;
    const zones = +this.state.numZones;

    const panel = () => {
      const panels = new Array();

      // Always push UZC on to the array. It will always be a possibility.
      panels.push({
        modelName: (zones < 4 ? "UZC 4" :`UZC ${zones + (zones%2)}`),
        imgURL: productImages.panels.uzc,
        description: APP_STRINGS.STRING_UZC_DESCRIPTION,//"Compatible with all HVAC systems with up to 4 stages of heat and 2 stages of cool.",
        linkBtns:[
          { 
            key: 0,
            title:"Web Page",
            onPress: ()=>Linking.openURL('https://www.ewccontrols.com/uzc')
          },
          {
            key: 1,
            title:"Technical Bulletin",
            onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090375a0221.pdf')
          },
          {
            key: 2,
            title:"Submittal Sheet",
            onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090377a0140.pdf')
          },
        ],
      });
        
      // Push BMPLUS if it's within parameters.
      if(zones <= 7 && heat <= 3){
        panels.push({
          modelName: (zones < 3 ? "BMPLUS 3000" : `BMPLUS ${(zones - ((zones % 2)) + 1)}000`),
          imgURL: productImages.panels.bmplus,
          description: APP_STRINGS.STRING_BMPLUS_DESCRIPTION,
          linkBtns:[
            { 
              key: 0,
              title:"Web Page",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/bmplus')
            },
            {
              key: 1,
              title:"Technical Bulletin",
              onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090375a0228.pdf')
            },
            {
              key: 2,
              title:"Submittal Sheet",
              onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0139.pdf')
            },
          ],
        });
      }

      // Push NCM300 if it's within parameters.
      if(zones <= 3 && cool == 1 && heat <= 2){
        panels.push({
          modelName: "NCM300",
          imgURL: productImages.panels.ncm300,
          description: APP_STRINGS.STRING_NCM300_DESCRIPTION,
          linkBtns:[
            { 
              key: 0,
              title:"Web Page",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/ncm')
            },
            {
              key: 1,
              title:"Technical Bulletin",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090375a0226.pdf')
            },
            {
              key: 2,
              title:"Submittal Sheet",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090377a0138.pdf')
            },
          ],
        });
      }

      return panels;
    }

    this.state.panelOutput = panel();
    this.toggleModal(true);

  }

  render() {
    return (

      <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={0} behavior="padding" enabled>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView style={{flex: 1}}>
          <Disclaimer style={{marginBottom:5, alignSelf: 'stretch'}}text={APP_STRINGS.STRING_ZONEBOARDRESISCREEN_DISCLAIMER}/>
          <Modal
            animationType = {"slide"} transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>  
              <ProductOutputModal product={this.state.panelOutput} exitOnPress ={() => {this.toggleModal(!this.state.modalVisible)}}/>
          </Modal>
          <PanelViewContainer title="Cooling Stages" text={APP_STRINGS.STRING_ZONEBOARDRESISCREEN_COOLINGSTAGES}>
          <Picker
            style={{}} itemStyle={styles.pickerItems}
            selectedValue={this.state.stageCool}
            onValueChange={(itemValue) => this.setState({stageCool: itemValue})}>
            <Picker.Item label="1 Cooling Stage" value='1' />
            <Picker.Item label="2 Cooling Stages" value='2' />
          </Picker>
          </PanelViewContainer>
          <PanelViewContainer title="Heating Stages" text={APP_STRINGS.STRING_ZONEBOARDRESISCREEN_HEATINGSTAGES}>
          <Picker
            style={{}} itemStyle={styles.pickerItems}
            selectedValue={this.state.stageHeat}
            onValueChange={(itemValue) => this.setState({stageHeat: itemValue})}>
            <Picker.Item label="1 Heating Stage" value='1' />
            <Picker.Item label="2 Heating Stages" value='2' />
            <Picker.Item label="3 Heating Stage" value='3' />
            <Picker.Item label="4 Heating Stages" value='4' />
          </Picker>
          </PanelViewContainer>
          <PanelViewContainer title="Number of Zones" text={APP_STRINGS.STRING_ZONEBOARDRESISCREEN_NUMZONES}>
          <Text style={styles.sliderLabelText}>Number of Zones: {this.state.numZones}</Text>
            <Slider 
              style={styles.slider} 
              maximumValue={22}
              minimumValue={2}
              step={1}
              value={this.state.numZones}
              onValueChange={val => this.setState({numZones: val})}
              />
          </PanelViewContainer>
          <MyButton bypass={this.state} style={{marginTop: 25, marginBottom:10}} title="Suggest a Control Panel" onPress={this.getControlPanel}></MyButton>
          </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default ControlPanelsResidentialScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  slider : {
    padding:25,
    marginHorizontal: 25,
  },
  sliderLabelText:{
    alignSelf:'center',
    fontWeight:'bold',
    fontSize:20,
    marginTop: 15
  },
  pickerItems:{
    color: '#0033ff',
    height:120, 
    fontSize: 25,
  }
});