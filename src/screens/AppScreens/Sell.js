import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Pick
} from 'react-native';
import Button from '../../assets/components/Button';
import ModalDropdown from 'react-native-modal-dropdown';
export default function Sell({navigation}) {
  const [error1, seterror1] = useState(null);
  const [error2, seterror2] = useState(null);
  const [error3, seterror3] = useState(null);
  const [heading, setheading] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState(null);
  const [category, setcategory] = useState(null);
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
    if (price == 0||price==null) {
      seterror3('Price cannot be 0 or empty');
    } else {
      seterror3('');
    }
  };
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <View style={{backgroundColor: '#4d94ff'}}>
        <Text style={styles.headtext}>Post Your Ad</Text>
      </View>
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
          keyboardType="numeric"
          onBlur={() => pricevalidator()}
        />
        <Text style={styles.error}>{error3}</Text>
        <Text style={styles.headingtext}>Category</Text>
        <ModalDropdown
          onSelect={category => setcategory(category)}
          options={['Bike', 'Book', 'Car', 'Electronics', 'Fashion','Furniture','Phones','Property','Other']}
          textStyle={{fontSize: 18, color: 'gray',marginTop:'2%',marginLeft:'2%'}}
          defaultValue="Bike"
          dropdownTextStyle={{fontSize: 18, color: '#6e6c69'}}
          dropdownStyle={{
            width:'90%',
            borderBottomLeftRadius:10,
            borderBottomRightRadius:10,
            marginTop:'3%'
          }}
          style={styles.price}
        />
        <Text style={styles.headingtext}>Location</Text>
        <TextInput placeholder="Location" style={styles.price} />
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          if (error1 == '' && error2 == '' && error3 == '') {
            navigation.navigate('Sell1');
          } else {
            headingvalidator();
            descriptionvalidator();
            pricevalidator();
          }
        }}>
        <Button text="Next" />
      </TouchableOpacity>
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
    marginBottom: '1%',
  },
  price: {
    width: '90%',
    alignSelf: 'center',
    height: 45,
    borderRadius: 8,
    fontSize: 16,
    borderColor: '#4d94ff',
    borderWidth: 0.8,
  },
});
