import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export default function Searchtext({navigation, route}) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const set = [];
    firestore()
      .collection('Ads')
      .get()
      .then(snapshot => {
        snapshot.forEach(data => {
          if (data._data.postedBy != auth().currentUser.uid) {
            set.push(data.data());
          }
        });
        setdata(set);
      });
  }, []);
  data.forEach(d => {
    console.log(Object.values(d));
  });
  return (
    <View>
      <Text>Searchtext</Text>
    </View>
  );
}
