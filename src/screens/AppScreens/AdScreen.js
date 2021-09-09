import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SliderBox } from "react-native-image-slider-box";
export default function AdScreen({navigation}) {
  const images = [
    require('../../assets/images/machine1.jpg'),
    require('../../assets/images/machine2.jpg'),
    require('../../assets/images/machine3.jpg'),
  ];
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
    <ScrollView
      showsVerticalScrollIndicator={false}>
      <View style={styles.cards}>
      <SliderBox
          sliderBoxHeight={300}
          images={images}
        />
      </View>
      <View style={{marginHorizontal: '6%'}}>
        <View style={styles.priceicon}>
          <Text style={styles.price}>Rs 500/Month</Text>
          <TouchableOpacity>
            <Icon
              name="heart-outline"
              size={18}
              style={styles.icon}
              color="white"
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.heading}>
          Apple Macbook Air(2015) model with a lot
        </Text>
        <Text style={styles.description}>
          No Major damages fully functional with all sensors and all other
          functionalities uusugsugsu sugugsus gsugsgs susgusus susbusugss
          uiigsigbsbsbusb shsihs sisis subsubss sishkbss
        </Text>
        <View style={styles.category}>
          <Text style={styles.categorytext}>Category</Text>
          <Text style={styles.categorytype}>Electronics</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categorytext}>Location</Text>
          <Text style={styles.categorytype}>Moradabad</Text>
        </View>
        <View style={styles.category}>
          <Text style={styles.categorytext}>Posted On</Text>
          <Text style={styles.categorytype}>27/02/2021</Text>
        </View>
        <TouchableOpacity style={styles.category} onPress={()=> navigation.navigate('UserProfile')}>
          <Text style={styles.categorytext}>Posted By</Text>
          <Text style={styles.categorytype}>Emma Phillps</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Chat</Text>
        </TouchableOpacity>
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  cards: {
    height: 300,
    alignSelf: 'center',
    borderRadius: 20,
    marginHorizontal:'6%',
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
  button:{
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#4d94ff',
    marginTop: '5%',
    borderRadius: 10,
    marginBottom:'5%'
},
text:{
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'NotoSansJP-Bold'
}
});
