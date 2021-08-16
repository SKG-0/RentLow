import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../assets/components/Button';
import ImagePicker from 'react-native-image-crop-picker';
export default function Sell1({navigation}) {
  const [images, setimages] = new useState(null);
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
        alert('An error occured !');
      });
  };
  return (
    <View style={styles.main}>
      <View style={{backgroundColor: '#4d94ff'}}>
        <Text style={styles.headtext}>Select Images</Text>
      </View>
      <TouchableOpacity style={styles.selectbtn} onPress={() => pickimage()}>
        <Text style={styles.selectext}>Select images for Ad</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginBottom: '4%'}}
        onPress={() => {
          if (images != null) {
            navigation.navigate('Home');
          } else {
            alert('Please select at least 1 image');
          }
        }}>
        <Button text="Post My Ad"/>
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
    backgroundColor: 'white',
  },
  headtext: {
    fontSize: 30,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    color: 'white',
    marginVertical: '-2%',
  },
  selectbtn: {
    alignSelf: 'center',
    width: '50%',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: '10%',
    elevation: 10,
  },
  selectext: {
    fontFamily: 'NotoSansJP-Bold',
    textAlign: 'center',
    color: 'black',
  },
});
