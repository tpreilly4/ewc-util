import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, ImageBackground, ScrollView, Image, View, Text, Linking} from 'react-native';
import Disclaimer from '../components/Disclaimer';
import productImages from '../images/index';
import APP_STRINGS from '../strings';
import PanelViewContainer from '../components/PanelViewContainer';
import MyButton from '../components/MyButton';

export default class TransformersScreen extends Component {
  render() {

  
    return (
      <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={styles.container}>
          <SafeAreaView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
            <Disclaimer text={APP_STRINGS.STRING_TRANSFORMERS_DISCLAIMER}/>
            <View style={styles.cardContainer}>
              <Text style={styles.titleText}>T40-VA-PT</Text>
              <Text style={styles.featureText}>Plate Mounted</Text>
              <Text style={styles.featureText}>24V 40VA</Text>
              <Image 
                style={styles.productImage}
                source={productImages.transformers.t40vapt} 
                resizeMode={'contain'}/>
            </View>
            <View style={styles.cardContainer}>
              <Text style={styles.titleText}>T40-VA-F</Text>
              <Text style={styles.featureText}>Foot Mounted</Text>
              <Text style={styles.featureText}>24V 40VA</Text>
              <Image 
                style={styles.productImage}
                source={productImages.transformers.t40vaf} 
                resizeMode={'contain'}/>
            </View>
            <MyButton 
              title="Submittal Sheet"
              onPress={()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0133.pdf')}
              style={{marginVertical:15}}/>
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
  cardContainer:{
    flex:1, 
    alignItems: 'center', 
    backgroundColor: 'white', 
    borderRadius:15, 
    width:'97%', 
    alignSelf:'center', 
    margin:10
  },
  productImage: {
		alignSelf:'center',
		width: 250,
		height: 175,
		marginBottom: 25,
  },
  titleText: {
    fontSize: 25, 
    fontWeight: 'bold', 
    margin: 15
  },
  featureText:{
    fontSize: 20, 
    marginBottom:10
  }
})
