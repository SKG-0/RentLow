import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../assets/components/Button';
import ImageSlider from 'react-native-image-slider';
export default function AdScreen({navigation}) {
  const images = [
    require('../../assets/images/machine1.jpg'),
    require('../../assets/images/machine2.jpg'),
    require('../../assets/images/machine3.jpg'),
  ];
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: 'white'}}
      showsVerticalScrollIndicator={false}>
      <View style={styles.cards}>
        <ImageSlider
          images={images}
        />
      </View>
      <View style={{marginHorizontal: '6%'}}>
        <View style={styles.priceicon}>
          <Text style={styles.price}>Rs 500/Month</Text>
          <TouchableOpacity>
            <Icon
              name="heart-outline"
              size={30}
              style={styles.icon}
              color="#4d94ff"
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
      <TouchableOpacity style={{marginBottom: '5%'}}>
        <Button text="Chat" />
      </TouchableOpacity>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  cards: {
    width:'100%',
    height: 400,
    marginTop: '5%',
    alignSelf: 'center',
    borderRadius: 20,
    marginHorizontal:'6%'
  },
  priceicon: {
    marginTop: '8%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 20,
    marginTop: '-4%',
    color: '#4d94ff',
  },
  heading: {
    fontSize: 24,
    fontFamily: 'NotoSansJP-Bold',
    color: '#001940',
  },
  description: {
    fontSize: 16,
    fontFamily: 'NotoSansJP-Light',
    lineHeight: 25,
    color: '#4d4d4d',
  },
  category: {
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categorytext: {
    fontSize: 16,
    fontFamily: 'NotoSansJP-Bold',
    color: '#001940',
  },
  categorytype: {
    fontSize: 16,
    fontFamily: 'NotoSansJP-Bold',
    color: '#4d94ff',
  },
});
