import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions } from 'react-native'

export default class UZCTable extends Component {
  render() {
		const rowColorA = "#ffffff"
		const rowColorB = "#d3d3d3"
    return (
			<ScrollView style={{flex:1}}>
      <View style={[styles.rowContainer, {backgroundColor: '#5667f9', borderTopStartRadius: 10, borderTopEndRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10}]}>
        <Text style={[styles.columnA, {color: 'white'}]}>Number of Zones</Text>
				<Text style={[styles.columnB, {color: 'white'}]}>Model</Text>
      </View>
      <View style={[styles.rowContainer, {backgroundColor: rowColorA}]}>
				<Text style={styles.columnA}>2-4 Zones</Text>
				<Text style={styles.columnB}>UZC4</Text>
			</View>
      <View style={[styles.rowContainer, {backgroundColor: rowColorB}]}>
				<Text style={styles.columnA}>5-6 Zones</Text>
				<Text style={styles.columnB}>UZC6</Text>
			</View>
			<View style={[styles.rowContainer, {backgroundColor: rowColorA}]}>
				<Text style={styles.columnA}>7-8 Zones</Text>
				<Text style={styles.columnB}>UZC8</Text>
			</View>
      <View style={[styles.rowContainer, {backgroundColor: rowColorB}]}>
				<Text style={styles.columnA}>9-10 Zones</Text>
				<Text style={styles.columnB}>UZC10</Text>
			</View>
			<View style={[styles.rowContainer, {backgroundColor: rowColorA}]}>
				<Text style={styles.columnA}>11-12 Zones</Text>
				<Text style={styles.columnB}>UZC12</Text>
			</View>
      <View style={[styles.rowContainer, {backgroundColor: rowColorB}]}>
				<Text style={styles.columnA}>13-14 Zones</Text>
				<Text style={styles.columnB}>UZC14</Text>
			</View>
			<View style={[styles.rowContainer, {backgroundColor: rowColorA}]}>
				<Text style={styles.columnA}>15-16 Zones</Text>
				<Text style={styles.columnB}>UZC16</Text>
			</View>
      <View style={[styles.rowContainer, {backgroundColor: rowColorB}]}>
				<Text style={styles.columnA}>17-18 Zones</Text>
				<Text style={styles.columnB}>UZC18</Text>
			</View>
			<View style={[styles.rowContainer, {backgroundColor: rowColorA}]}>
				<Text style={styles.columnA}>19-20 Zones</Text>
				<Text style={styles.columnB}>UZC20</Text>
			</View>
      <View style={[styles.rowContainer, {backgroundColor: rowColorB, borderBottomEndRadius: 10, borderBottomStartRadius: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}]}>
				<Text style={styles.columnA}>21-22 Zones</Text>
				<Text style={styles.columnB}>UZC22</Text>
			</View>
			</ScrollView>
    )
  }
}

const win = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    rowContainer: {
			flexDirection:'row',
			backgroundColor: '#0033ff',
			width: '97%',
			height: 45,
			alignItems: 'center',
			alignSelf: 'center',
			justifyContent: 'space-between'
    },
		columnA: {
			fontSize: 20,
			marginStart: 25,
		},
		columnB: {
			fontSize: 20,
			fontWeight: 'bold',
			marginEnd: 25,
		},
});
