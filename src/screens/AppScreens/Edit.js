import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import female from '../../assets/images/female1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../assets/components/Button';
import ImagePicker from 'react-native-image-crop-picker';
export default function Edit({navigation}) {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const pickimage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setimage(image);
      })
      .catch(error => {
        alert('An error occured !');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <Text style={styles.headtext}>Edit Profile</Text>
      </View>
      <ScrollView>
        <TouchableOpacity
          style={styles.imagecontainer}
          onPress={() => pickimage()}>
          <Image source={female} style={styles.image} />
          <Icon name="plus" color="white" size={20} style={styles.plus} />
        </TouchableOpacity>
        <View style={{marginTop: '5%', marginHorizontal: '4%'}}>
          <View style={styles.inputview}>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#595959"
              placeholder="Sarthak Gupta"
            />
          </View>
          <View style={styles.inputview}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#595959"
              placeholder="sarthakguptamailbox@gmail.com"
            />
          </View>
          <View style={styles.inputview}>
            <Text style={styles.text}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Moradabad"
              placeholderTextColor="#595959"
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Tabs')}>
          <Button text="Update" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#4d94ff',
  },
  headtext: {
    fontSize: 30,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: 'white',
    marginVertical: '-2%',
  },
  imagecontainer: {
    marginTop: '10%',
  },
  image: {
    alignSelf: 'center',
    width: '45%',
    height: 130,
    opacity: 0.6,
  },
  plus: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 60,
  },
  inputview: {
    marginVertical: '5%',
  },
  text: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 20,
    color: '#001940',
  },
  input: {
    borderBottomColor: '#4d94ff',
    borderBottomWidth: 1,
    width: '95%',
    marginTop: '-5%',
    color: '#6b6b6b',
    fontSize: 18,
    height: 45,
    paddingBottom: -10,
  },
  button: {
    marginVertical: '5%',
  },
});
