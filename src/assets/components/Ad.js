import React,{} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function Ad({data}) {
  return (
    <View style={styles.ad}>
      <View style={styles.image}>
        <Image source={{uri:data.images[0].path}} style={styles.laptop} />
      </View>
      <View style={styles.info}>
        <View>
          <Text style={styles.heading} numberOfLines={2}>
            {data.heading}
          </Text>
        </View>
        <View>
          <Text style={styles.description} numberOfLines={3}>
            {data.description}
          </Text>
        </View>
        <View style={styles.bottom}>
          <View>
            <Text style={styles.price}>{data.price}/Month</Text>
          </View>
          <View>
            <Text style={styles.time}>1 week</Text>
          </View>
          <TouchableOpacity>
            <Icon
              name="heart-outline"
              size={18}
              style={styles.icon}
              color="#8c8c8c"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  ad: {
    width: '93%',
    backgroundColor: '#1a1a1a',
    height:165,
    borderRadius: 20,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: '3%',
  },
  image: {
    width: '35%',
    marginLeft: 10,
    justifyContent: 'center',
  },
  info: {
    width: '65%',
    alignSelf:'center'
  },
  laptop: {
    width: '100%',
    height: '55%',
  },
  heading: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    marginHorizontal: '7%',
    color: '#4d94ff',
  },
  description: {
    marginTop: '5%',
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    color: '#8c8c8c',
    marginHorizontal:'7%'
  },
  bottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '8%',
    marginHorizontal: '4%',
  },
  icon: {
    marginRight: '8%',
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    color: '#4d94ff',
    fontSize:13
  },
  time: {
    fontFamily: 'Montserrat-Bold',
    color: '#8c8c8c',
  },
});
