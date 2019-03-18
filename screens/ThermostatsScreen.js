import React, { Component } from 'react';
import { SafeAreaView, ImageBackground, ScrollView, StyleSheet, Linking} from 'react-native';
import ProductTable from '../components/ProductTable';
import productImages from '../images/index';
import APP_STRINGS from '../strings';


export default class SupplyDampersScreen extends Component {
  render() {

    const tstatFeatureCats = ["Programmability","Staging","Display","Wi-Fi Enabled","Power"]

		const data = [
			{
				id: "ewt955wh",
				title:"EWT-955WH",
				imgSrc: productImages.thermostats.ewt955wh,
				col1: tstatFeatureCats,
				col2:[
					"5+1+1\n7 Day\nNon-programmable",
					"Up to 3H/2C",
					"13 sq. in. Touchscreen",
					"No",
					"Battery\n24V Hardwire",
				],
				text:APP_STRINGS.STRING_EWT955WH_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Installation Manual",
						onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090375a0265.pdf')
					},
				],
			},
			{
				id:"ewt855i",
				title:"EWT-855i",
				imgSrc: productImages.thermostats.ewt855i,
				col1: tstatFeatureCats,
				col2:[
					"5+1+1\n7 Day\nNon-programmable",
					"Up to 4H/2C",
					"8 sq. in.",
					"iOS/Android Compatibility",
					"24V Hardwire",
				],
				text:APP_STRINGS.STRING_EWT855i_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Installation Manual",
						onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090375a0264.pdf')
					},
				],
			},
			{
				id: "ewt855",
				title:"EWT-855",
				imgSrc: productImages.thermostats.ewt855,
				col1: tstatFeatureCats,
				col2:[
					"5+1+1\n7 Day\nNon-programmable",
					"Up to 3H/2C",
					"8 sq. in.",
					"No",
					"Battery\n24V Hardwire",
				],
				text:APP_STRINGS.STRING_EWT855_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Installation Manual",
						onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090375a0263.pdf')
					},
				],
			},
			{
				id: "ewt725",
				title:"EWT-725",
				imgSrc: productImages.thermostats.ewt725,
				col1: tstatFeatureCats,
				col2:[
					"5+1+1",
					"Up to 2H/1C\nHeat Pump",
					"4 sq. in.",
					"No",
					"Battery\n24V Hardwire",
				],
				text:APP_STRINGS.STRING_EWT725_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Installation Manual",
						onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090375a0262.pdf')
					},
				],
			},
			{
				id:"ewt6012",
				title:"EWT-601-2",
				imgSrc: productImages.thermostats.ewt6012,
				col1: tstatFeatureCats,
				col2:[
					"Digital Non-Programmable",
					"1H/1C",
					"2 sq. in.",
					"No",
					"Battery\n24V Hardwire",
				],
				text:APP_STRINGS.STRING_EWT6012_DESCRIPTION,
				linkBtns:[
					{ 
						key: 0,
						title:"Installation Manual",
						onPress: ()=>Linking.openURL('https://www.ewccontrols.com/acrobat/090375a0261.pdf')
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
