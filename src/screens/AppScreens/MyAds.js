import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ad from '../../assets/components/Ad';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export default function MyAds({navigation}) {
  const [ads, setads] = useState([]);
  useEffect(() => {
    var set = [];
    const uid = auth().currentUser.uid;
    firestore()
      .collection('Users')
      .doc(uid)
      .onSnapshot(data => {
        data.data().Ads.forEach(e => {
          firestore()
            .collection('Ads')
            .doc(e)
            .onSnapshot(data => {
              set.push(data.data());
            });
        });
        console.log(set);
        setads(set);
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.header}>
        <Text style={styles.headtext}>My Ads</Text>
      </View>
      <ScrollView>
        {ads.map(data => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('AdScreen', {
                data: data,
              })
            }>
            <Ad data={data} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headtext: {
    fontSize: 26,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: '#4d94ff',
  },
});
