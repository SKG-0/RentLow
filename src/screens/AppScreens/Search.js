import React from 'react'
import { View, Text,StyleSheet,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Category from '../../assets/components/Category'
import bike from '../../assets/images/bike.png'
import book from '../../assets/images/book.png'
import car from '../../assets/images/car.png'
import electronics from '../../assets/images/electronics.png'
import fashion from '../../assets/images/fashion.png'
import furniture from '../../assets/images/furniture.png'
import other from '../../assets/images/other.png'
import phone from '../../assets/images/phone.png'
import property from '../../assets/images/property.png'
export default function Search() {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Text style={styles.header}>Search a product</Text>
            <View style={styles.searchbar}>
                <Icon name="search" size={20} color="#737373" style={styles.searchicon} />
                <TextInput placeholder="Fridge , Mobile" style={styles.input} placeholderTextColor="#8c8c8c" />
            </View>
            <Text style={styles.alltext}>All Categories</Text>
            <View style={styles.categories}>
                <View style={{display:'flex',flexDirection:'row',justifyContent: 'space-between',marginVertical:'7%'}}>
                    <Category image={bike} text="Bikes" />
                    <Category image={car} text="Cars" />
                    <Category image={book} text="Books" />
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent: 'space-between',marginVertical:'7%'}}>
                    <Category image={electronics} text="Electronics" />
                    <Category image={fashion} text="Fashion" />
                    <Category image={furniture} text="Furniture" />
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent: 'space-between',marginVertical:'7%'}}>
                    <Category image={phone} text="Mobiles" />
                    <Category image={property} text="Property" />
                    <Category image={other} text="Other" />
                </View>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    header:{
        fontSize:30,
        fontFamily:'NotoSansJP-Bold',
        marginHorizontal:'4%',
        color:'#333333'
    },
    searchbar:{
        display:'flex',
        flexDirection:'row',
        width:'92%',
        alignSelf:'center',
        marginTop:'3%',
        backgroundColor:'white',
        elevation:4,
        borderRadius:10
    },
    searchicon:{
        alignSelf:'center',
        marginLeft:'2%',
        marginRight:'1%'
    },
    input:{
        color:'#999999' ,
        width:'90%',
        fontSize:16
    },
    alltext:{
        marginHorizontal:'4%',
        marginTop:'5%',
        fontFamily:'NotoSansJP-Bold',
        fontSize:18,
        color:'#333333'
    },
    categories:{
        marginTop:'5%',
        marginHorizontal:'4%',
        height:'60%'
    }
})
