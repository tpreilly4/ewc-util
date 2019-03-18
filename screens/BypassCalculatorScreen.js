import React, { Component } from 'react'
import { View, Picker, TextInput, ImageBackground, StyleSheet, ScrollView, SafeAreaView, KeyboardAvoidingView, Alert, Modal, Linking } from 'react-native'
import MyButton from '../components/MyButton';
import PanelViewContainer from '../components/PanelViewContainer';
import APP_STRINGS from '../strings';
import productImages from '../images/index';
import Disclaimer from '../components/Disclaimer';
import ProductOutputModal from '../components/ProductOutputModal';
import InfoButton from '../components/InfoButton';


class BypassCalculatorScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      sc_input: '',
      sc_units: '1',
      sz_input: '',
      dl_input: '',
      or_input: '',
      bypassType_input: 'elec',
      shape_input: 'round',
      modalVisible: false,
      bypassOutput: '',
    };
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  getBypass = () => {

    const maxAirflowRoundBypass = 4000;
    const maxAirflowRectBypass = 3000;

    const userInput = {
      systemCapacity: +this.state.sc_input * +this.state.sc_units,
      smallestZone: +this.state.sz_input,
      damperLeakage: +this.state.dl_input,
      openRun: +this.state.or_input,
      shape: this.state.shape_input,
      type: this.state.bypassType_input,
    };

    // Check inputs, alert if invalid
    const inputIsValid = () => {
      if(userInput.systemCapacity <= 0 || isNaN(userInput.systemCapacity)){
        alert("Please enter a valid number for System Capacity.");
        return false;
      }else if(userInput.smallestZone <= 0 || isNaN(userInput.smallestZone)){
        alert("Please enter a valid number for Smallest Zone.");
        return false;
      }else if(isNaN(userInput.damperLeakage)){
        alert("You have entered an incorrect value for Damper Leakage. You may enter 0 or leave the field blank if this value does not exist.");
        return true;
      }else if(isNaN(userInput.openRun)){
        alert("You have entered an incorrect value for Open Run. You may enter 0 or leave the field blank if this value does not exist.");
        return true;
      }else{
        return true;
      }
    };

    // Custom alert for breaking 35% rule
    const boundsAlert = () => {
      Alert.alert('',
      APP_STRINGS.STRING_BPCSCREEN_BOUNDSALERT,
      [
        {
          text: 'Managing Excess Airflow', 
          onPress:()=>{this.props.navigation.navigate('LearnMore')}
        },
        {
          text: 'Go Back',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {cancelable: false},
      );
    };

    // Checks 35% rule and maximum damper size throws alert if not satisfied
    const inputIsWithinBounds = (sum) => {
      let bound = userInput.systemCapacity * .65;
      if(bound < sum){
        boundsAlert();
        return false;
      }else if(sum <= 0){
        alert("Based on your input, you are trying to bypass negative or zero airflow. Please double check your input and try again.");
        return false;
      }else if(sum > maxAirflowRectBypass && userInput.shape === 'rect'){
        alert("There is no single rectangular bypass damper that can bypass that much airflow. Please double-check your input or give us a call.")
        return false;
      }else if(sum > maxAirflowRoundBypass && userInput.shape === 'round'){
        alert("There is no single round bypass damper that can bypass that much airflow. Please double-check your input or give us a call.")
        return false;
      }else{
        return true;
      }
    };

    // determines size of round dampers
    const sizeRound = (sum) => {
      if(sum <= 0){
        alert(`You cannot bypass 0 cfm.`);
        return false;
      }
      else if (sum <= 400)
        return '8\"';
      else if (sum <= 700)
        return '10\"';
      else if (sum <= 1100)
        return '12\"';
      else if (sum <= 1700)
        return '14\"';
      else if (sum <= 2200)
        return '16\"';
      else if (sum <= 3000)
        return '18\"';
      else if (sum <= maxAirflowRoundBypass)
        return '20\"';
      else
        alert(`Something went wrong. Sorry about that!\n\nGo back and reload the bypass calculator.`);
    };

    // determines size of rect dampers
    const sizeRect = (sum) => {
      if(sum <= 0)
        console.log(`something went wrong. sum = ${sum}`);
      else if (sum <= 1000)
        return '12\" × 8\"';
      else if (sum <= 1200)
        return '12\" × 10\"';
      else if (sum <= 1400)
        return '12\" × 12\"';
      else if (sum <= 1600)
        return '20\" × 8\"';
      else if (sum <= 2000)
        return '20\" × 10\"';
      else if (sum <= maxAirflowRectBypass)
        return '20\" × 12\"';
      else
        console.log(`Something went wrong. Sorry about that!`);
    };

    const bypass = (sum) => { 
      if(userInput.shape == 'round' && userInput.type == 'elec'){
        return [{
          modelName: "SBD (Round)",
          size: sizeRound(sum),
          imgURL: productImages.bypassDampers.sbd,
          description: APP_STRINGS.STRING_SBD_DESCRIPTION,
          linkBtns:[
            { 
              key: 0,
              title:"Web Page",
              onPress: ()=>Linking.openURL('https://ewccontrols.com/by-pass-dampers/')
            },
            {
              key: 1,
              title:"Sales Brochure",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/ewc_sbd.pdf')
            },
            {
              key: 2,
              title:"Submittal Sheet",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090377a0306.pdf')
            },
          ],
        },];
      }else if(userInput.shape == 'round' && userInput.type == 'baro'){
        return [{
          modelName: "CLBD",
          size: sizeRound(sum),
          imgURL: productImages.bypassDampers.clbd,
          description: APP_STRINGS.STRING_CLBD_DESCRIPTION,
          linkBtns:[
            { 
              key: 0,
              title:"Web Page",
              onPress: ()=>Linking.openURL('https://ewccontrols.com/by-pass-dampers/')
            },
            {
              key: 1,
              title:"Technical Bulletin",
              onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090375a0250.pdf')
            },
            {
              key: 2,
              title:"Technical Bulletin (en Español)",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090377a0140.pdf')
            },
          ],
        },];
      }else if(userInput.shape == 'rect' && userInput.type == 'elec'){
        return [{
          modelName: "SBD (Rectangular)",
          size: sizeRect(sum),
          imgURL: productImages.bypassDampers.sbdnd,
          description: APP_STRINGS.STRING_SBD_DESCRIPTION,
          linkBtns:[
            { 
              key: 0,
              title:"Web Page",
              onPress: ()=>Linking.openURL('https://ewccontrols.com/by-pass-dampers/')
            },
            {
              key: 1,
              title:"Technical Bulletin",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/ewc_sbd.pdf')
            },
            {
              key: 2,
              title:"Submittal Sheet",
              onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090377a0306.pdf')
            },
          ],
        },];
      }else if(userInput.shape === 'rect' && userInput.type === 'baro'){
        return [{
          modelName: "PRD",
          size: sizeRect(sum),
          imgURL: productImages.bypassDampers.prd,
          description: APP_STRINGS.STRING_PRD_DESCRIPTION,
          linkBtns:[
            { 
              key: 0,
              title:"Web Page",
              onPress: ()=>Linking.openURL('https://ewccontrols.com/by-pass-dampers/')
            },
            {
              key: 1,
              title:"Technical Bulletin",
              onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090375a0224.pdf')
            },
          ],
        },];
      }else{
        alert("Something went wrong.");
      }
    };

    // Run all functions.
    if(inputIsValid()){
      const sum = (userInput.systemCapacity - userInput.smallestZone - userInput.damperLeakage - userInput.openRun);
      if(inputIsWithinBounds(sum)){
        this.state.bypassOutput = bypass(sum);
        this.toggleModal(true);
        //alert(JSON.stringify(this.state.bypassOutput, null, 1));
      }
    }
  
  }


  render() {
    return (
      <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={styles.container}>
        <KeyboardAvoidingView keyboardVerticalOffset={89} behavior='padding' enabled>
        <SafeAreaView>
          <ScrollView style={{flex:1}}>
          <Disclaimer style={{marginBottom:5}}text={APP_STRINGS.STRING_BPCSCREEN_DISCLAIMER}/>
          <Modal
            animationType = {"slide"} transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>  
              <ProductOutputModal product={this.state.bypassOutput} exitOnPress ={() => {this.toggleModal(!this.state.modalVisible)}}/>
          </Modal>          
          <PanelViewContainer title="System Capacity"text={APP_STRINGS.STRING_BPCSCREEN_SYSCAP}>
          <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
            <TextInput
                style={[styles.input, styles.inputSZ]}
                onChangeText={(sc_input) => this.setState({sc_input})}
                value={this.state.sc_input}
                keyboardType='numeric'
                placeholder='Enter System Capacity...'
                placeholderTextColor='#0033ff'
              />
              <Picker
                style={{ width: 70 }} itemStyle={{height: 120, color: '#0033ff'}}
                selectedValue={this.state.sc_units}
                onValueChange={(itemValue) =>  this.setState({sc_units: itemValue})}>
                <Picker.Item label="CFM" value='1' />
                <Picker.Item label="Tons" value='400' />
              </Picker>
            </View>
          </PanelViewContainer>
          <PanelViewContainer title="Smallest Zone"text={APP_STRINGS.STRING_BPCSCREEN_SMALLESTZONE}>
            <TextInput
                style={styles.input}
                onChangeText={(sz_input) => this.setState({sz_input})}
                value={this.state.sz_input}
                keyboardType='numeric'
                placeholder='Enter Smallest Zone...'
                placeholderTextColor='#0033ff'
              />
          </PanelViewContainer>
          <PanelViewContainer 
            title="Damper Leakage"
            text={APP_STRINGS.STRING_BPCSCREEN_DAMPERLEAKAGE} 
            info={<InfoButton 
              onPress={()=>Alert.alert(
                'Damper Leakage',
                APP_STRINGS.STRING_BPCSCREEN_DAMPERLEAKAGEINFO,
                [{text: 'OK'},]
              )}
            />}
          >
            <TextInput
                style={styles.input}
                onChangeText={(dl_input) => this.setState({dl_input})}
                value={this.state.dl_input}
                keyboardType='numeric'
                placeholder='Enter Damper Leakage...'
                placeholderTextColor='#0033ff'
              />
          </PanelViewContainer>
          <PanelViewContainer 
            title="Open Run"
            text={APP_STRINGS.STRING_BPCSCREEN_OPENRUN} 
            info={<InfoButton 
              onPress={()=>Alert.alert(
                'Open Run',
                APP_STRINGS.STRING_BPCSCREEN_OPENRUNINFO,
                [{text: 'OK'},]
              )}
            />}
          >
            <TextInput
                style={styles.input}
                onChangeText={(or_input) => this.setState({or_input})}
                value={this.state.or_input}
                keyboardType='numeric'
                placeholder='Enter Open Run...'
                placeholderTextColor='#0033ff'
              />
          </PanelViewContainer>
          <PanelViewContainer title="Desired Bypass Type"text={APP_STRINGS.STRING_BPCSCREEN_OPENRUN}>
            <Picker
              style={{}} itemStyle={{color: '#0033ff', height:120, fontSize: 25}}
              selectedValue={this.state.bypassType_input}
              onValueChange={(itemValue) => this.setState({bypassType_input: itemValue})}>
              <Picker.Item label="Electronic" value='elec' />
              <Picker.Item label="Barometric" value='baro' />
            </Picker>
          </PanelViewContainer>

          <PanelViewContainer title="Desired Bypass Shape"text={APP_STRINGS.STRING_BPCSCREEN_OPENRUN}>
            <Picker
              style={{}} itemStyle={{color: '#0033ff', height:120, fontSize: 25}}
              selectedValue={this.state.shape_input}
              onValueChange={(itemValue) => this.setState({shape_input: itemValue})}>
              <Picker.Item label="Round" value='round' />
              <Picker.Item label="Rectangular" value='rect' />
            </Picker>
          </PanelViewContainer>

          <MyButton title="Calculate Bypass" onPress={this.getBypass} style={{marginTop: 25, marginBottom: 10}}/>
          </ScrollView>
        </SafeAreaView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default BypassCalculatorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    width: 200,
    borderRadius: 100,
    justifyContent: 'flex-start',
    marginVertical: 5,
    marginStart:10,
    marginLeft:10,
  },
  input : {
    height: 60, 
    textAlign: 'center',
    color: '#0033ff',
    fontSize: 30,
  },
  inputSZ : {
    height: 120,
    width: 280,
    fontSize: 25,
  },
});