import React from 'react';
import {View, Text, StyleSheet,ScrollView,Image, TouchableOpacity} from 'react-native';
import female from '../../assets/images/female1.png'
import Icon from 'react-native-vector-icons/FontAwesome'
export default function Edit() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.headtext}>Edit Profile</Text>
      </View>
      <ScrollView>
        <TouchableOpacity style={styles.imagecontainer}>
          <Image source={female} style={styles.image} />
          <Icon name="plus" color="white" size={20} style={styles.plus} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4d94ff'
  },
  headtext: {
    fontSize: 30,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: 'white',
    marginVertical: '-2%',
  },
  imagecontainer:{
    marginTop:'10%'
  },
  image:{
    alignSelf:'center',
    width:'45%',
    height:130,
    opacity:0.6
  },
  plus:{
    alignSelf:'center',
    position: 'absolute',
    marginTop:60
  }
});
