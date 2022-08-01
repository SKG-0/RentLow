import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import book from '../../assets/images/book.png';
import electronics from '../../assets/images/electronics.png';
import fashion from '../../assets/images/fashion.png';
import furniture from '../../assets/images/furniture.png';
import phone from '../../assets/images/phone.png';
import property from '../../assets/images/property.png';
import Ad from '../../assets/components/Ad';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export default function Home({navigation}) {
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
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View>
        <View></View>
        <TouchableOpacity style={styles.locationbar}>
          <Icon
            name="map-marker"
            size={26}
            color="#4d94ff"
            style={{alignSelf: 'center'}}
          />
          <Text style={styles.location}>India</Text>
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        <View>
          <View style={styles.categorybar}>
            <Text style={styles.categoriestext}>Categories</Text>
            <TouchableOpacity
              style={styles.viewbtn}
              onPress={() => navigation.navigate('Search')}>
              <Text style={styles.view}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={styles.categories}>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate('Search1', {
                  text: 'Fashion',
                })
              }>
              <Image source={fashion} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate('Search1', {
                  text: 'Books',
                })
              }>
              <Image source={book} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Books</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate('Search1', {
                  text: 'Phones',
                })
              }>
              <Image source={phone} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Phones</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate('Search1', {
                  text: 'Furniture',
                })
              }>
              <Image source={furniture} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Furniture</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate('Search1', {
                  text: 'Properties',
                })
              }>
              <Image source={property} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Property</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.category}
              onPress={() =>
                navigation.navigate('Search1', {
                  text: 'Electronics',
                })
              }>
              <Image source={electronics} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Electronics</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: '4%',
          }}>
          <Text style={styles.explore}>Explore </Text>
          <Text style={styles.way}>your way</Text>
        </View>
        <View style={styles.ads}>
          {data.length == 0 ? (
            <Text
              style={{
                color: 'gray',
                fontSize: 16,
                textAlign: 'center',
                marginTop: '25%',
                fontFamily: 'NotoSansJP-Bold',
              }}>
              Nothing to Show
            </Text>
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
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  locationbar: {
    marginTop: '3%',
    display: 'flex',
    marginLeft: '2%',
    display: 'flex',
    flexDirection: 'row',
  },
  location: {
    fontSize: 14,
    fontFamily: 'NotoSansJP-Medium',
    textAlignVertical: 'center',
    marginLeft: '1%',
    color: '#d9d9d9',
  },
  main: {
    width: '100%',
    height: '100%',
  },
  explore: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 22,
    color: '#a6a6a6',
  },
  way: {
    fontSize: 22,
    fontFamily: 'NotoSansJP-Bold',
    color: '#d9d9d9',
  },
  categoryimage: {
    width: 40,
    height: 40,
    alignSelf: 'center',
  },
  category: {
    marginHorizontal: 20,
  },
  categorytext: {
    fontSize: 12,
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'center',
    color: '#bfbfbf',
  },
  categories: {
    marginTop: '5%',
  },
  categorybar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '4%',
  },
  categoriestext: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 18,
    color: 'white',
  },
  viewbtn: {
    backgroundColor: '#4d94ff',
    width: '20%',
    height: 30,
    borderRadius: 30,
    justifyContent: 'center',
    marginTop: '3%',
  },
  view: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
