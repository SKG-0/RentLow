import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
export default function Sell({navigation}) {
  const [error1, seterror1] = useState(null);
  const [error2, seterror2] = useState(null);
  const [error3, seterror3] = useState(null);
  const [error4, seterror4] = useState(null);
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
    if (price == 0 || price == null) {
      seterror3('Price cannot be 0 or empty');
    } else {
      seterror3('');
    }
  };
  const categoryvalidator=()=>{
    if(category==null){
      seterror4('Please select a category');
    }
    else{
      seterror4('');
    }
  }
  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <View>
        <Text style={styles.headtext}>Post Your Ad</Text>
      </View>
      <ScrollView>
        <Text style={styles.inputext}>Heading</Text>
        <TextInput
          placeholder="Product heading"
          style={styles.input}
          onChangeText={heading => setheading(heading)}
          onBlur={() => headingvalidator()}
          placeholderTextColor="#8c8c8c"
        />
        <Text style={styles.error}>{error1}</Text>
        <Text style={styles.inputext}>Description</Text>
        <TextInput
          placeholder="Product description"
          style={styles.input}
          onChangeText={description => setdescription(description)}
          multiline={true}
          numberOfLines={4}
          onBlur={() => descriptionvalidator()}
          placeholderTextColor="#8c8c8c"
        />
        <Text style={styles.error}>{error2}</Text>
        <Text style={styles.inputext}>Price</Text>
        <TextInput
          placeholder="Product rent per month"
          style={styles.input}
          onChangeText={price => setprice(price)}
          keyboardType="numeric"
          onBlur={() => pricevalidator()}
          placeholderTextColor="#8c8c8c"
        />
        <Text style={styles.error}>{error3}</Text>
        <Text style={styles.inputext}>Category</Text>
        <ModalDropdown
          onSelect={category => {
            setcategory(category) 
            seterror4('')
          }}
          options={[
            'Bike',
            'Book',
            'Car',
            'Electronics',
            'Fashion',
            'Furniture',
            'Phones',
            'Property',
            'Other',
          ]}
          textStyle={{
            fontSize: 14,
            color: '#8c8c8c',
            marginTop: '5%',
            marginLeft: '2%',
          }}
          defaultValue="Bike"
          dropdownTextStyle={{
            fontSize: 14,
            color: 'white',
            backgroundColor: 'black',
          }}
          dropdownStyle={{
            width: '90%',
            marginTop: '3%',
          }}
          style={styles.input}
        />
        <Text style={styles.error}>{error4}</Text>
        <Text style={styles.inputext}>Location</Text>
        <TextInput
          placeholder="Location"
          style={styles.input}
          placeholderTextColor="#8c8c8c"
        />
        <TouchableOpacity
          onPress={() => {
            if (error1 == '' && error2 == '' && error3 == ''&&error4=='') {
              navigation.navigate('Sell1',{
                heading:heading,
                description:description,
                price:price,
                category:category
              });
            } else {
              headingvalidator();
              descriptionvalidator();
              pricevalidator();
              categoryvalidator();
            }
          }}
          style={styles.button}>
          <Text style={styles.text}>Next</Text>
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
    marginTop:'2%'
  },
  input: {
    width: '90%',
    alignSelf: 'center',
    height: 45,
    fontSize: 14,
    borderBottomColor: '#595959',
    borderBottomWidth: 0.3,
    paddingBottom: -5,
    color: '#d9d9d9',
    marginLeft: '-3%'
  },
  inputext: {
    fontSize: 16,
    marginHorizontal: '4%',
    fontFamily: 'NotoSansJP-Bold',
    color: 'white',
    marginBottom: '-3%',
    marginTop:'2%'
  },
  error: {
    color: '#ff6666',
    fontSize: 14,
    fontFamily: 'NotoSansJP-Bold',
    marginHorizontal: '4%',
  },
  button:{
    width: '90%',
    height: 45,
    alignSelf: 'center',
    backgroundColor: '#4d94ff',
    marginTop: '10%',
    borderRadius: 10,
    marginBottom:'3%'
},
  text:{
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'NotoSansJP-Bold'
  }
});
