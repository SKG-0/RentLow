import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import book from '../../assets/images/book.png';
import electronics from '../../assets/images/electronics.png';
import fashion from '../../assets/images/fashion.png';
import furniture from '../../assets/images/furniture.png';
import phone from '../../assets/images/phone.png';
import property from '../../assets/images/property.png';
import Ad from '../../assets/components/Ad';
export default function Home({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <View></View>
        <TouchableOpacity style={styles.locationbar}>
          <Icon name="map-marker" size={30} color="#4d94ff" />
          <Text style={styles.location}>Ghaziabad</Text>
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
            <TouchableOpacity style={styles.category}>
              <Image source={fashion} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Fashion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Image source={book} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Books</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Image source={phone} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Phones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Image source={furniture} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Furniture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
              <Image source={property} style={styles.categoryimage} />
              <Text style={styles.categorytext}>Property</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.category}>
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
          <TouchableOpacity onPress={() => navigation.navigate('AdScreen')}>
            <Ad />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AdScreen')}>
            <Ad />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AdScreen')}>
            <Ad />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('AdScreen')}>
            <Ad />
          </TouchableOpacity>
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
    fontSize: 18,
    fontFamily: 'NotoSansJP-Medium',
    textAlignVertical: 'center',
    marginLeft: '1%',
    marginTop: '-2.5%',
  },
  main: {
    width: '100%',
    height: '100%',
  },
  explore: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 28,
    color: '#333333',
  },
  way: {
    fontSize: 28,
    fontFamily: 'NotoSansJP-Bold',
    color: '#8c8c8c',
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
    fontSize: 14,
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'center',
    color: '#333333',
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
    fontSize: 20,
    color: '#333333',
  },
  viewbtn: {
    backgroundColor: '#80b3ff',
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
