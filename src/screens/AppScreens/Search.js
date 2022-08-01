import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import bike from '../../assets/images/bike.png';
import book from '../../assets/images/book.png';
import car from '../../assets/images/car.png';
import electronics from '../../assets/images/electronics.png';
import fashion from '../../assets/images/fashion.png';
import furniture from '../../assets/images/furniture.png';
import other from '../../assets/images/other.png';
import phone from '../../assets/images/phone.png';
import property from '../../assets/images/property.png';
export default function Search({navigation}) {
  const [text, settext] = useState('');
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View>
        <Text style={styles.headtext}>Search products</Text>
      </View>
      <View style={styles.searchbar}>
        <Icon
          name="search"
          size={20}
          color="#737373"
          style={styles.searchicon}
        />
        <TextInput
          placeholder="Fridge , Mobile"
          style={styles.input}
          placeholderTextColor="#999999"
          onSubmitEditing={() =>
            navigation.navigate('Searchtext', {
              text: text,
            })
          }
          onChangeText={text => settext(text)}
        />
      </View>
      <ScrollView
        style={styles.categories}
        showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Bikes',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={bike} style={styles.listimage} />
            <Text style={styles.listext}>Bikes</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Books',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={book} style={styles.listimage} />
            <Text style={styles.listext}>Books</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Cars',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={car} style={styles.listimage} />
            <Text style={styles.listext}>Cars</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Electronics',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={electronics} style={styles.listimage} />
            <Text style={styles.listext}>Electronics</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Fashion',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={fashion} style={styles.listimage} />
            <Text style={styles.listext}>Fashion</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Furniture',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={furniture} style={styles.listimage} />
            <Text style={styles.listext}>Furniture</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Phones',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={phone} style={styles.listimage} />
            <Text style={styles.listext}>Phones</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Properties',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={property} style={styles.listimage} />
            <Text style={styles.listext}>Properties</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.list}
          onPress={() =>
            navigation.navigate('Search1', {
              text: 'Others',
            })
          }>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <Image source={other} style={styles.listimage} />
            <Text style={styles.listext}>Others</Text>
          </View>
          <Icon
            name="chevron-right"
            size={14}
            color="white"
            style={{marginTop: '4%'}}
          />
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
    marginTop: '2%',
  },
  searchbar: {
    display: 'flex',
    flexDirection: 'row',
    width: '92%',
    alignSelf: 'center',
    marginTop: '3%',
    backgroundColor: '#262626',
    borderRadius: 10,
  },
  input: {
    color: 'white',
  },
  searchicon: {
    alignSelf: 'center',
    marginLeft: '2%',
    marginRight: '1%',
  },
  categories: {
    marginTop: '5%',
    marginHorizontal: '4%',
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: '2%',
    borderBottomColor: '#595959',
    borderBottomWidth: 0.3,
    paddingVertical: '3%',
  },
  listimage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
  },
  listext: {
    fontFamily: 'NotoSansJP-Bold',
    fontSize: 14,
    color: 'white',
    marginLeft: '12%',
  },
});
