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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{backgroundColor: '#4d94ff'}}>
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
    fontSize: 30,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: 'white',
    marginVertical: '-2%',
  },
  chat: {
    display: 'flex',
    flexDirection: 'row',
    borderTopColor: 'black',
    marginVertical: '4%',
  },
  chats: {
    marginHorizontal: '4%',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    justifyContent: 'center',
  },
  chatext: {
    marginLeft: '2%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    width: '100%',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color:'#404040'
  },
  message: {
    fontSize:14,
    color:'#737373',
    marginTop:2
  },
});
