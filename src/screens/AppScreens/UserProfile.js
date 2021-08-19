import React from 'react';
import {View, Text,StyleSheet,Image, ScrollView, Touchable, TouchableOpacity} from 'react-native';
import female from '../../assets/images/female1.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ad from '../../assets/components/Ad'
export default function UserProfile() {
  return (
    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={styles.head}>
        <Image source={female} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.name}>Emma Phillips</Text>
          <View style={styles.emailtext}>
            <Icon
              name="email"
              size={18}
              color="#6b6b6b"
              style={{marginRight: '3%', marginTop: '2.5%'}}
            />
            <Text style={styles.email}>emmaphillips@gmail.com</Text>
          </View>
        </View>
      </View>
      <Text style={styles.adtext}>Ads posted</Text>
      <ScrollView>
          <TouchableOpacity>
              <Ad />
          </TouchableOpacity>
          <TouchableOpacity>
              <Ad />
          </TouchableOpacity>
          <TouchableOpacity>
              <Ad />
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles=StyleSheet.create({
    head: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: '5%',
        height: '15%',
      },
      image: {
        width: '30%',
        height: '80%',
        alignSelf: 'center',
      },
      text: {
        width: '60%',
        height: '30%',
        marginLeft: '3%',
        alignSelf: 'center',
        marginTop: '-10%',
      },
      name: {
        fontSize: 24,
        fontFamily: 'OpenSans-Bold',
        color: '#001940',
      },
      email: {
        color: '#6b6b6b',
        marginTop: '2%',
      },
      emailtext: {
        display: 'flex',
        flexDirection: 'row',
      },
      adtext:{
          fontFamily:'NotoSansJP-Bold',
          marginHorizontal:'6%',
          fontSize:20,
          marginTop:'2%',
          marginBottom:'2%',
          color:'#001940'
      }
})
