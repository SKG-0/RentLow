import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Ad from '../../assets/components/Ad';
export default function MyAds() {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.header}>
        <Text style={styles.headtext}>My Ads</Text>
      </View>
      <ScrollView>
        <Ad />
        <Ad />
        <Ad />
        <Ad />
      </ScrollView> 
    </View>
  );
}
const styles = StyleSheet.create({
  headtext: {
    fontSize: 26,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: '#4d94ff'
  },
});
