import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import face from '../../assets/images/female1.png';
export default function Chat({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View>
        <Text style={styles.headtext}>Chats</Text>
      </View>
      <ScrollView style={styles.chats} showsVerticalScrollIndicator={false}>
        <TouchableOpacity style={styles.chat}>
          <TouchableOpacity onPress={()=> navigation.navigate('UserProfile')}>
            <Image source={face} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.chatext}>
            <Text style={styles.name}>Sample name</Text>
            <Text style={styles.message}>hshsu hsugubsdu</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.chat}>
        <TouchableOpacity onPress={()=> navigation.navigate('UserProfile')}>
            <Image source={face} style={styles.image} />
          </TouchableOpacity>
          <View style={styles.chatext}>
            <Text style={styles.name}>Sample name</Text>
            <Text style={styles.message}>hshsu hsugubsdu</Text>
          </View>
        </TouchableOpacity>
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
  chat: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: 'black',
    marginVertical: '4%',
  },
  chats: {
    marginHorizontal: '3%',
  },
  image: {
    width:70,
    height:70,
    borderRadius: 50,
    justifyContent: 'center',
  },
  chatext: {
    marginLeft: '2%',
    borderBottomWidth: 0.3,
    borderBottomColor: '#666666',
    width: '100%',
    marginTop:'4%'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'white'
  },
  message: {
    fontSize:14,
    color:'#a6a6a6',
    marginTop:2
  },
});
