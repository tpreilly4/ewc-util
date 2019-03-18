import React, { Component } from 'react';
import { SafeAreaView, KeyboardAvoidingView, ImageBackground, ScrollView, StyleSheet, Linking, Text } from 'react-native';
import ProductTable from '../components/ProductTable';
import productImages from '../images/index';
import APP_STRINGS from '../strings';


export default class SupplyDampersScreen extends Component {
  render() {

		const sdFeatureCats = ["Motor","Open/Close Indicators", "Power Draw", "Torque", "C/UL Listed", "Class 2 NEMA Certification"];

		const data = [
			{
				id: "modelurd",
				title:"Model URD",
				imgSrc: productImages.supplyDampers.urd,
				col1: sdFeatureCats,
				col2:[
					"24 Volt\n3 Wire\nPower Open/Close",
					"LED's",
					"1.5 VA",
					"18\" lbs.",
					"Yes ",
					"Yes"
				],
				text:APP_STRINGS.STRING_URD_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Manuals",
						onPress: ()=>Linking.openURL('https://ewccontrols.com/user-manuals-and-technical-bulletins/')
					},
				],
			},
			{
				id: "modelrsd",
				title:"Model RSD",
				imgSrc: productImages.supplyDampers.rsd,
				col1: sdFeatureCats,
				col2:[
					"24 Volt\n2 Wire\nSpring return",
					"N/A",
					"8 VA",
					"5\" lbs.",
					"No",
					"No ",
				],
				text:APP_STRINGS.STRING_RSD_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Submittal Sheet",
						onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0123.pdf')
					},
					{ 
						key: 1,
						title:"Submittal Sheet (En Español)",
						onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0312.pdf')
					},
				],
			},
			{
				id: "modelsid",
				title:"Model SID",
				imgSrc: productImages.supplyDampers.sid,
				col1: sdFeatureCats,
				col2:[
					"24 Volt\n3 Wire\nPower Open/Close",
					"LED's",
					"1.5 VA",
					"18\" lbs.",
					"Yes ",
					"Yes"
				],
				text:APP_STRINGS.STRING_SID_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Submittal Sheet",
						onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0118.pdf')
					},
					{ 
						key: 1,
						title:"Submittal Sheet (En Español)",
						onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0314.pdf')
					},
				],
			},
			{
				id: "modelnd",
				title:"Model ND",
				imgSrc: productImages.supplyDampers.nd,
				col1: sdFeatureCats,
				col2:[
					"24 Volt\n3 Wire\nPower Open/Close",
					"LED's",
					"1.5 VA",
					"18\" lbs.",
					"Yes ",
					"Yes"
				],
				text:APP_STRINGS.STRING_ND_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Submittal Sheet",
						onPress: ()=>Linking.openURL('https://ewccontrols.com/user-manuals-and-technical-bulletins/')
					},
				],
			},
			{
				id: "modelndrsd",
				title:"Model ND-RSD",
				imgSrc: productImages.supplyDampers.ndrsd,
				col1: sdFeatureCats,
				col2:[
					"24 Volt\n2 Wire\nSpring return",
					"N/A",
					"8 VA",
					"5\" lbs.",
					"No",
					"No ",
				],
				text:APP_STRINGS.STRING_NDRSD_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Submittal Sheet",
						onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0132.pdf')
					},
					{ 
						key: 1,
						title:"Submittal Sheet (En Español)",
						onPress: ()=>Linking.openURL('https://ewccontrols.com/acrobat/090377a0315.pdf')
					},
				],
			},
		];

    return (
    <ImageBackground source={require('../images/bg_warm_house_tintedandblurred.png')}style={styles.container}>
				<SafeAreaView style={{flex: 1}}>
					<ScrollView style={{flex: 1}}>
						<ProductTable data={data}/>
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
	}
})
