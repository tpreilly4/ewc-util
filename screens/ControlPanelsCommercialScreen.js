import React, {Component} from 'react';
import APP_STRINGS from '../strings';
import {StatusBar, StyleSheet, ImageBackground, SafeAreaView, View, Button, Dimensions, Linking, Text} from 'react-native';
import Disclaimer from '../components/Disclaimer';
import UZCTable from '../components/UZCTable';
import MyButton from '../components/MyButton';

class ControlPanelsCommercialScreen extends Component {
    render() {
      return (
        <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={styles.container}>
          <SafeAreaView style={{justifyContent: 'space-between'}}>
          <StatusBar barStyle="light-content" />
          <Disclaimer 
            style={{marginBottom:10}}
            text={APP_STRINGS.STRING_COMMERCIALPANEL_DESCRIPTION}/>
						<View style={{alignSelf: 'center', flex:5}}>
							<UZCTable/>
						</View>
            <MyButton 
              style={{marginTop: 10}} 
              title='UZC Manual' 
              onPress={()=>Linking.openURL('https://ewccontrols.com/acrobat/090375a0221.pdf')}/>
            <MyButton 
              title='UZC Manual en Español' 
              onPress={()=>Linking.openURL('https://ewccontrols.com/acrobat/090375a0252.pdf')}/>
            <MyButton 
              style={{marginBottom: 10}}
              title='UZC Submittal Sheet' 
              onPress={()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0140.pdf')}/>

          </SafeAreaView>
        </ImageBackground>
      );
    }
  }
  // <Button title="test"onPress={()=>this.props.navigation.navigate('Test')}/>

  export default ControlPanelsCommercialScreen;
  
  const win = Dimensions.get('window');

  const styles = StyleSheet.create({
		container: {
      flex: 1,
			alignItems: 'center',
      backgroundColor: '#ffffff',
    },
  });