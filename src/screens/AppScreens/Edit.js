import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export default function Edit({navigation}) {
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [image, setimage] = useState('');
  const [emailerror, setemailerror] = useState(null);
  const [namerror, setnamerror] = useState(null);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const uid = auth().currentUser.uid;
    firestore()
      .collection('Users')
      .doc(uid)
      .onSnapshot(data => {
        setemail(data.data().email);
        setname(data.data().name);
        setimage(data.data().image);
      });
  }, []);
  const pickimage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    })
      .then(image => {
        setimage(image.path);
      })
      .catch(error => {
        alert('An error occured !');
      });
  };
  const namevalidator = () => {
    if (/^[A-Za-z ]+$/.test(name) == false) {
      setnamerror('Name is not valid');
      return false;
    } else {
      setnamerror('');
      return true;
    }
  };
  const emailvalidator = () => {
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (regex.test(email) == false) {
      setemailerror('Enter a valid email address !');
      return false;
    } else {
      setemailerror('');
      return true;
    }
  };
  const update = () => {
    const uid = auth().currentUser.uid;
    if (emailerror == '' && namerror == '') {
      setloading(true);
      auth()
        .currentUser.updateEmail(email)
        .then(() => setloading(false))
        .catch(err => console.log(err));
      firestore()
        .collection('Users')
        .doc(uid)
        .update({
          name: name,
          email: email,
          image: image,
        })
        .then(() => {
          setloading(false);
          navigation.navigate('Tabs');
        });
    } else {
      namevalidator();
      emailvalidator();
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.header}>
        <Text style={styles.headtext}>Edit Profile</Text>
      </View>
      <ScrollView>
        {image == '' ? (
          <ActivityIndicator
            size={24}
            color="white"
            style={{
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: '15%',
            }}
          />
        ) : (
          <TouchableOpacity
            style={styles.imagecontainer}
            onPress={() => pickimage()}>
            <Image source={{uri: image}} style={styles.image} />
          </TouchableOpacity>
        )}
        <View style={{marginTop: '5%', marginHorizontal: '4%'}}>
          <View style={styles.inputview}>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor="#808080"
              placeholder="Enter your new name"
              numberOfLines={1}
              onChangeText={name => setname(name)}
              onSubmitEditing={() => namevalidator()}
            />
          </View>
          <Text style={styles.error}>{namerror}</Text>
          <View style={styles.inputview}>
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your new email"
              placeholderTextColor="#808080"
              onChangeText={email => setemail(email)}
              onSubmitEditing={() => emailvalidator()}
            />
          </View>
          <Text style={styles.error}>{emailerror}</Text>
          <View style={styles.inputview}>
            <Text style={styles.text}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Moradabad"
              placeholderTextColor="#808080"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => update()}>
        <Text style={styles.buttontext}>Update</Text>
        {loading == true ? (
          <ActivityIndicator
            color="white"
            size={20}
            style={{alignSelf: 'center', marginLeft: '5%'}}
          />
        ) : (
          <View></View>
        )}
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
    marginTop: '3%',
  },
  imagecontainer: {
    marginTop: '5%',
  },
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  plus: {
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 80,
  },
  inputview: {
    marginVertical: '3%',
  },
  text: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 16,
    color: 'white',
  },
  input: {
    borderBottomColor: '#4d94ff',
    borderBottomWidth: 0.3,
    width: '95%',
    marginTop: '-5%',
    color: '#b3b3b3',
    fontSize: 16,
    height: 45,
    paddingBottom: -10,
    paddingLeft: -5,
  },
  button: {
    width: '90%',
    height: '9%',
    alignSelf: 'center',
    backgroundColor: '#4d94ff',
    marginTop: '5%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical:'2%'
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 17,
    fontFamily: 'NotoSansJP-Bold',
  },
  email: {
    marginTop: '4%',
    backgroundColor: 'gray',
    paddingVertical: '2%',
    marginBottom: '2%',
    borderRadius: 10,
  },
  emailtext: {
    color: 'white',
    fontSize: 18,
  },
  error: {
    color: 'red',
    fontFamily: 'NotoSansJP-Regular',
    fontSize: 12,
  },
});
