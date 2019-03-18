import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Button, Dimensions, Platform } from 'react-native';
import MyButton from './MyButton';

export default class ProductTable extends Component {
  render() {

	  const data = this.props.data;

		const views = data.map((t) =>
		<View key = {t.id} style={{marginBottom:10}}>
			<View style={styles.container}> 
				<Text style={styles.titleText}>{t.title}</Text>
				<Image source={t.imgSrc} style={styles.productImage} resizeMode={'contain'}/>
				<View style={{flexDirection: 'row', justifyContent: 'flex-start', alignSelf: 'center'}}>
					<View styles={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
						{t.col1.map((i, index) => <View key={i} style={(index%2===0 ? styles.grayRow : styles.whiteRow)}><Text style={{flex:1, height: 20, padding: 3}}>{i}</Text></View>)}
					</View>
					<View style={{}}>
						{t.col2.map((i, index) => <View key={i} style={(index%2===0 ? styles.grayRow : styles.whiteRow)}><Text style={{flex:1, height:20, padding: 3, fontWeight:'bold'}}>{i}</Text></View>)}
					</View>
				</View>
				<Text style={styles.descriptionText}>{t.text}</Text>
			</View>
			{t.linkBtns.map((j) => 
          <MyButton key={j.key} onPress={j.onPress} title={j.title}/>)}
			</View>);

    return (
      <View>
				{views}
      </View>
    )
  }
};

const win = Dimensions.get('window').width; 

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'white',
		borderTopStartRadius: 15,
		borderTopEndRadius: 15,
		borderBottomStartRadius: 5,
		borderBottomEndRadius: 5,
		width: win*.97,
		marginTop: 10,
		marginBottom: 1,
	},
	titleText: {
		color: '#000000',
		fontSize: 30,
		fontWeight: 'bold',
		padding: 25,
		alignSelf: 'center',
	},
	descriptionText: {
		textAlign: 'center',
		fontSize: 16,
		margin: 10,
	},
	productImage: {
		alignSelf:'center',
		width: 250,
		height: 175,
		marginBottom: 25,
	},
	grayRow: {
		height: 60,
		backgroundColor: 'lightgray',
		width: win*.46,
	},
	whiteRow: {
		backgroundColor: '#fafafa',
		height:60,
		width: win*.46,
	},

});
