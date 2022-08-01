import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SliderBox} from 'react-native-image-slider-box';
import firestore from '@react-native-firebase/firestore';
export default function AdScreen({navigation, route}) {
  const [name, setname] = useState('');
  const [images, setimages] = useState([]);
  const uid = route.params.data.postedBy;
  useEffect(() => {
    route.params.data.images.forEach(item => {
      images.push(item.path);
    });
    setimages(images);
    firestore()
      .collection('Users')
      .doc(uid)
      .onSnapshot(data => {
        setname(data.data().name);
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cards}>
          <SliderBox images={images} sliderBoxHeight={300} />
        </View>
        <View style={{marginHorizontal: '6%'}}>
          <View style={styles.priceicon}>
            <Text style={styles.price}>{route.params.data.price}/Month</Text>
            <TouchableOpacity>
              <Icon
                name="heart-outline"
                size={18}
                style={styles.icon}
                color="white"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>{route.params.data.heading}</Text>
          <Text style={styles.description}>
            {route.params.data.description}
          </Text>
          <View style={styles.category}>
            <Text style={styles.categorytext}>Category</Text>
            <Text style={styles.categorytype}>
              {route.params.data.category}
            </Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categorytext}>Location</Text>
            <Text style={styles.categorytype}>
              {route.params.data.location}
            </Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.categorytext}>Posted On</Text>
            <Text style={styles.categorytype}>{route.params.data.date}</Text>
          </View>
          <TouchableOpacity
            style={styles.category}
            onPress={() =>
              navigation.navigate('UserProfile', {
                uid: uid,
              })
            }>
            <Text style={styles.categorytext}>Posted By</Text>
            <Text style={styles.categorytype}>{name}</Text>
          </TouchableOpacity>
          <View style={styles.category}>
            <Text style={styles.categorytext}>Email</Text>
            <Text style={styles.categorytype}>{route.params.data.email}</Text>
          </View>
        </View>
        {/* <TouchableOpacity style={styles.button}>
          <Text style={styles.text}>Chat</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  cards: {
    height: 300,
    alignSelf: 'center',
    borderRadius: 20,
    marginHorizontal: '6%',
  },
  priceicon: {
    marginTop: '8%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 14,
    marginTop: '-4%',
    color: '#4d94ff',
  },
  heading: {
    fontSize: 18,
    fontFamily: 'NotoSansJP-Bold',
    color: 'white',
  },
  description: {
    fontSize: 13,
    fontFamily: 'NotoSansJP-Light',
    lineHeight: 20,
    color: '#a6a6a6',
  },
  category: {
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categorytext: {
    fontSize: 14,
    fontFamily: 'NotoSansJP-Bold',
    color: '#4d94ff',
  },
  categorytype: {
    fontSize: 14,
    fontFamily: 'NotoSansJP-Bold',
    color: 'white',
  },
  button: {
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#4d94ff',
    marginTop: '5%',
    borderRadius: 10,
    marginBottom: '5%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'NotoSansJP-Bold',
  },
});
