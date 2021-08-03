import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import Button from '../../assets/components/Button';
export default function Sell({navigation}) {
  const [error1, seterror1] = useState(null);
  const [error2, seterror2] = useState(null);
  const [error3, seterror3] = useState(null);
  const [heading, setheading] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState(null);
  const headingvalidator = () => {
    if (heading.length < 10) {
      seterror1('Enter minimum 10 characters');
    } else {
      seterror1('');
    }
  };
  const descriptionvalidator = () => {
    if (description.length < 10) {
      seterror2('Enter minimum 10 characters');
    } else {
      seterror2('');
    }
  };
  const pricevalidator = () => {
    if (price==0) {
      seterror3('Price cannot be 0');
    } else {
      seterror3('');
    }
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text style={styles.headtext}>Post Your Ad</Text>
      <ScrollView>
        <Text style={styles.headingtext}>Heading</Text>
        <TextInput
          placeholder="Product heading"
          style={styles.heading}
          onChangeText={heading => setheading(heading)}
          onBlur={() => headingvalidator()}
        />
        <Text style={styles.error}>{error1}</Text>
        <Text style={styles.headingtext}>Description</Text>
        <TextInput
          placeholder="Product description"
          style={styles.description}
          onChangeText={description => setdescription(description)}
          multiline={true}
          numberOfLines={4}
          onBlur={() => descriptionvalidator()}
        />
        <Text style={styles.error}>{error2}</Text>
        <Text style={styles.headingtext}>Price</Text>
        <TextInput
          placeholder="Product rent"
          style={styles.price}
          onChangeText={price => setprice(price)}
          keyboardType='numeric'
          onBlur={() => pricevalidator()}
        />
        <Text style={styles.error}>{error3}</Text>
        <Text style={styles.headingtext}>Location</Text>
        <TextInput
          placeholder="Location"
          style={styles.price}
        />
      </ScrollView>
      <TouchableOpacity onPress={()=>{
        if(error1==''&&error2==''&&error3==''){
          navigation.navigate('Sell1');
        }
        else{
          headingvalidator();
          descriptionvalidator();
          pricevalidator();
        }
      }}>
        <Button />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  headtext: {
    fontSize: 30,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
    marginTop: '3%',
    color: '#333333',
  },
  heading: {
    width: '90%',
    alignSelf: 'center',
    height: 45,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#4d94ff',
    borderWidth: 0.8,
  },
  headingtext: {
    fontSize: 20,
    marginHorizontal: '4%',
    fontFamily: 'NotoSansJP-Bold',
    color: '#333333',
  },
  description: {
    width: '90%',
    alignSelf: 'center',
    height: 100,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#4d94ff',
    borderWidth: 0.8,
    textAlignVertical: 'top',
  },
  error: {
    color: 'red',
    fontSize: 16,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
  },
  button: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    flex: 1,
    marginBottom: '1%'
  },
  price:{
    width: '90%',
    alignSelf: 'center',
    height: 45,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#4d94ff',
    borderWidth: 0.8,
  }
});
