import React from 'react';
import {View, TextInput, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Ad from '../../assets/components/Ad'
export default function Search1() {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
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
          placeholderTextColor="#8c8c8c"
        />
      </View>
      <ScrollView style={{marginTop:'5%'}}>
          <TouchableOpacity>
              <Ad />
          </TouchableOpacity>
          <TouchableOpacity>
              <Ad />
          </TouchableOpacity><TouchableOpacity>
              <Ad />
          </TouchableOpacity><TouchableOpacity>
              <Ad />
          </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  searchbar: {
    display: 'flex',
    flexDirection: 'row',
    width: '92%',
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: '#262626',
    borderRadius: 10,
  },
  searchicon: {
    alignSelf: 'center',
    marginLeft: '2%',
    marginRight: '1%',
  },
});
