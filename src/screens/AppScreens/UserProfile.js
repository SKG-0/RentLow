import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ad from '../../assets/components/Ad';
import firestore from '@react-native-firebase/firestore';
export default function UserProfile({route}) {
  const [data, setdata] = useState('');
  const [Ads,setAds]=useState([]);
  useEffect(() => {
    const set = [];
    firestore()
      .collection('Users')
      .doc(route.params.uid)
      .onSnapshot(data => {
        setdata(data.data());
        data.data().Ads.forEach(item => {
          firestore().collection('Ads').doc(item).onSnapshot(res=>{
            set.push(res.data());
          })
        });
      });
      setAds(set);
  },[]);
  return ( 
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.head}>
        <Image source={{uri: data.image}} style={styles.image} />
        <View style={styles.text}>
          <Text style={styles.name}>{data.name}</Text>
          <View style={styles.emailtext}>
            <Icon
              name="email"
              size={18}
              color="#6b6b6b"
              style={{marginRight: '3%', marginTop: '2.5%'}}
            />
            <Text style={styles.email}>{data.email}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.adtext}>Ads posted</Text>
      <ScrollView>
      {
            Ads.map(res=>(
              <TouchableOpacity onPress={() => navigation.navigate('AdScreen',{
                data:res
              })}>
                <Ad data={res} />
              </TouchableOpacity>
            ))
          }
      </ScrollView> 
    </View>
  );
}
const styles = StyleSheet.create({
  head: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '5%',
    height: '15%',
    color: 'white',
    marginHorizontal: '4%',
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    borderRadius: 50,
  },
  text: {
    width: '60%',
    height: '30%',
    marginLeft: '3%',
    alignSelf: 'center',
    marginTop: '-10%',
    color: 'white',
  },
  name: {
    fontSize: 24,
    fontFamily: 'OpenSans-Bold',
    color: 'white',
  },
  email: {
    color: 'white',
    marginTop: '2%',
  },
  emailtext: {
    display: 'flex',
    flexDirection: 'row',
  },
  adtext: {
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '6%',
    fontSize: 20,
    marginTop: '2%',
    marginBottom: '2%',
    color: 'white',
  },
});
