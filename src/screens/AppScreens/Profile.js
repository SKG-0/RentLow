import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import female from '../../assets/images/female1.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
export default function Profile({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.headtext}>My Profile</Text>
      </View>
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
      <View>
        <ScrollView style={styles.lists}>
        <TouchableOpacity style={styles.list} onPress={()=> navigation.navigate('Edit')}>
            <Icon2 name="pencil" size={26} color="#4d94ff" />
            <Text style={styles.listext}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list} onPress={()=> navigation.navigate('Favourite')}>
            <Icon name="heart-outline" size={26} color="#4d94ff" />
            <Text style={styles.listext}>Favourites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list} onPress={()=> navigation.navigate('MyAds')}>
            <Icon name="plus-circle-outline" size={26} color="#4d94ff" />
            <Text style={styles.listext}>My Ads</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.list}>
            <Icon name="power" size={26} color="red" />
            <Text style={styles.listext}>Log Out</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4d94ff',
  },
  headtext: {
    fontSize: 30,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: 'white',
    marginVertical: '-2%',
  },
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
  lists:{
    marginTop:'12%',
    marginHorizontal:'4%'
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    width: '40%',
    marginHorizontal: '4%',
    marginVertical: '3.5%',
  },
  listext: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 18,
    color: '#001940',
    marginTop: '-8%',
    marginLeft:'10%'
  },
});
