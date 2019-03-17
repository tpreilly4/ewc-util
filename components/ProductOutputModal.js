import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity, Platform, Button, Linking } from 'react-native';
import MyButton from './MyButton';


export default class ProductOutputModal extends Component {
  render() {
    const {product} = this.props;

    console.log(product);

    //panel objects do not have a size. Make sure we don't try to render a size text view if it doesn't exist
    const size = product[0].size ? product[0].size : 0;
    
    //If it's a bypass object, it will have a size. Render the appropriate text view and store it in {sizeView}
    let sizeView;
    if(size){
      sizeView = <Text style={styles.sizeText}>Size: {size}</Text>;
    }



    //const img = product.imgURL;
    //const desc = product.description;
    const {exitOnPress} = this.props;

    const products = product.map((i) => 
      <View key={i.modelName} style={{flex:1}}>
        <Text style={styles.modelText}>{i.modelName}</Text>
        {sizeView}
        <Image resizeMode='contain' style={styles.productImage} source={i.imgURL}></Image>
        <Text style={styles.descText}>{i.description}</Text>
        {i.linkBtns.map((j) => 
          <MyButton key={j.key} onPress={j.onPress} title={j.title} style={styles.linkBtns}/>)}
      </View>);

    return (
      <View style={{flex:1}}>
        <ScrollView style={styles.container} contentContainerStyle={{alignContent: 'center'}}>
          <View style={{padding:25}}/>
          {products}
          <View style={{padding:25}}/>
        </ScrollView>
        <TouchableOpacity style={styles.fab} onPress={exitOnPress}>
          <Text style={{fontWeight:'bold', color:'red', fontSize: 30}}>×</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const win = Dimensions.get('window').width;
//const winheight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dbdfff',
    paddingBottom: 50
  },
  fab : {
    position: 'absolute',
    top: 50,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: 'white',
    alignItems:'center',
    justifyContent:'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,    
      },
      android: {
        elevation: 5,
      },
    }),        
  },
  modelText: {
    textAlign:'center',
    alignSelf: 'center',
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    width: win * .95,
    paddingTop:25,
  },
  sizeText: {
    textAlign: 'center',
    alignSelf: 'center',
    color: '#000000',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    width: win * .95,
  },
  descText: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 20,
    marginHorizontal: 20,
    marginBottom:20,
  },
  productImage: {
		alignSelf:'center',
		width: win*.9,
		height: 250,
		margin: 25,
  },
})
