import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,ActivityIndicator} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export default function Sell1({navigation, route}) {
  const [images, setimages] = new useState(null);
  const [loading, setloading] = useState(false);
  const [ads,setads]=useState([]);
  useEffect(()=>{
    const uid = auth().currentUser.uid;
    firestore().collection('Users').doc(uid).onSnapshot((data)=>{
      setads(data.data().Ads)
    })
  },[]);
  const pickimage = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      multiple: true,
    }) 
      .then(image => {
        setimages(image);
      })
      .catch(error => {
        alert(error)
      });
  };
  const post = () => {
    if (images != null) {
      setloading(true);
      const uid = auth().currentUser.uid;
      firestore().collection('Ads').add({
        heading: route.params.heading,
        description: route.params.description,
        price: route.params.price,
        category: options[route.params.category],
        postedBy: uid,
        images:images
      }).then((docRef)=>{
        navigation.navigate('Home');
        ads.push(docRef._documentPath._parts[1]);
        firestore().collection('Users').doc(uid).update({
          Ads:ads
        })
      }).catch(err=> alert(err));
      setloading(false);
    } else {
      alert('Please select images');
    }
  };
  const options = [
    'Bike',
    'Book',
    'Car',
    'Electronics',
    'Fashion',
    'Furniture',
    'Phones',
    'Property',
    'Other',
  ];
  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.headtext}>Select Images</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.selectbtn} onPress={() => pickimage()}>
          <Text style={styles.selectext}>Select images for Ad</Text>
        </TouchableOpacity>
        <Text style={styles.youtext}>You can select multiple images</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => post()}>
        <Text style={styles.text}>Post My Ad</Text>
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
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },
  headtext: {
    fontSize: 26,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: '#4d94ff',
    marginTop: '2%',
  },
  selectbtn: {
    alignSelf: 'center',
    width: '50%',
    height: 40,
    backgroundColor: '#333333',
    borderRadius: 10,
    elevation: 10,
  },
  selectext: {
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'center',
    color: 'white',
  },
  button: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    backgroundColor: '#4d94ff',
    marginTop: '5%',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom:'3%'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
    fontFamily: 'NotoSansJP-Bold',
  },
  youtext: {
    color: '#b3b3b3',
    textAlign: 'center',
    marginTop: '5%',
    fontFamily: 'NotoSansJP-Bold',
  },
});
