import React, {useEffect, useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ad from '../../assets/components/Ad';
import firestore from '@react-native-firebase/firestore';
export default function Search1({route, navigation}) {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const set = [];
    firestore()
      .collection('Ads')
      .where('category', '==', route.params.text)
      .get()
      .then(data => {
        data.forEach(data => {
          set.push(data._data);
        });
        setdata(set);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.searchbar}>
        <Icon
          name="search"
          size={20}
          color="#737373"
          style={styles.searchicon}
        />
        <TextInput
          placeholder="Fridge , Mobile"
          style={styles.input}
          placeholderTextColor="#8c8c8c"
        />
      </View>
      <ScrollView style={{marginTop: '5%'}}>
        {data.length == 0 ? (
          <Text style={styles.nothingtext}>Nothing to show</Text>
        ) : (
          data.map(res => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('AdScreen', {
                  data: res,
                })
              }>
              <Ad data={res} />
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  searchbar: {
    display: 'flex',
    flexDirection: 'row',
    width: '92%',
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: '#262626',
    borderRadius: 10,
  },
  searchicon: {
    alignSelf: 'center',
    marginLeft: '2%',
    marginRight: '1%',
  },
  nothingtext: {
    color: 'white',
    textAlign: 'center',
    marginTop: '50%',
    fontSize: 20,
  },
});
