import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default function Profile({navigation}) {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  useEffect(() => {
    const uid = auth().currentUser.uid;
    firestore()
      .collection('Users')
      .doc(uid)
      .onSnapshot(data => {
        setemail(data.data().email);
        setname(data.data().name);
        setimage(data.data().image);
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.header}>
        <Text style={styles.headtext}>Profile</Text>
      </View>
      <View style={styles.head}>
        {image == '' ? (
          <ActivityIndicator
            size={24}
            color="white"
            style={{alignSelf: 'center', justifyContent: 'center',marginLeft:'5%'}}
          />
        ) : (
          <Image
            resizeMode="contain"
            source={{uri: image}}
            style={styles.image}
          />
        )}
        <View style={styles.text}>
          <Text numberOfLines={1} style={styles.name}>
            {name}
          </Text>
          <View style={styles.emailtext}>
            <Icon
              name="email"
              size={18}
              color="#6b6b6b"
              style={{marginRight: '3%', marginTop: '2.5%'}}
            />
            <Text numberOfLines={1} style={styles.email}>
              {email}
            </Text>
          </View>
        </View>
      </View>
      <View>
        <ScrollView style={styles.lists}>
          <TouchableOpacity
            style={styles.list1}
            onPress={() => navigation.navigate('Edit')}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Icon2 name="pencil" size={22} color="#99bbff" />
              <Text style={styles.listext}>Edit Profile</Text>
            </View>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => navigation.navigate('Favourite')}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Icon name="heart-outline" size={22} color="#ffb3d9" />
              <Text style={styles.listext}>Favourites</Text>
            </View>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => navigation.navigate('MyAds')}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Icon2 name="user-plus" size={22} color="#99ffcc" />
              <Text style={styles.listext}>My Ads</Text>
            </View>
            <Icon name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.list}
            onPress={() => {
              auth()
                .signOut()
                .then(() => console.log('User signed out!'));
              navigation.navigate('AuthStack');
            }}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Icon name="power" size={24} color="#ff4d4d" />
              <Text style={styles.listext}>Logout</Text>
            </View>
            <Icon name="chevron-right" size={26} color="white" />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  headtext: {
    fontSize: 26,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: '#4d94ff',
    marginTop: '3%',
  },
  head: {
    display: 'flex',
    flexDirection: 'row',
    height: '15%',
    marginHorizontal: '4%',
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius:50
  },
  text: {
    width: '70%',
    height: '40%',
    marginLeft: '7%',
    alignSelf: 'center',
    marginTop: '-6%',
  },
  name: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
  },
  email: {
    color: '#6b6b6b',
    marginTop: '2%',
  },
  emailtext: {
    display: 'flex',
    flexDirection: 'row',
  },
  lists: {
    marginTop: '5%',
    marginHorizontal: '4%',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: '3%',
    paddingVertical: '2%',
  },
  list1: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: '3%',
    paddingVertical: '2%',
    paddingTop: '6%',
  },
  listext: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 14,
    color: 'white',
    marginLeft: '12%',
    marginTop: '-7%',
  },
});
