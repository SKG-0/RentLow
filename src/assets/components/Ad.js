import React from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity } from 'react-native'
import laptop from '../images/laptop.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default function Ad() {
    return (
        <TouchableOpacity style={styles.ad}>
            <View style={styles.image}>
                <Image source={laptop} style={styles.laptop}/>
            </View>
            <View style={styles.info}>
                <View>
                    <Text style={styles.heading}>Apple Macbook Air(2015) model with a lot</Text>
                </View>
                <View>
                    <Text style={styles.description}>No Major damages fully functional with all sensors</Text>
                </View>
                <View style={styles.bottom}>
                    <View>
                        <Text style={styles.price}>500/Month</Text>
                    </View>
                    <View>
                        <Text style={styles.time}>1 week</Text>
                    </View>
                    <TouchableOpacity>
                        <Icon name="heart-outline" size={18} style={styles.icon} color='#8c8c8c' />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    ad:{
        width:'93%',
        backgroundColor:'white',
        height:160,
        borderRadius:20,
        elevation:4,
        display:'flex',
        flexDirection:'row',
        alignSelf:'center',
        marginVertical:'3%'
    },
    image:{
        width:'35%',
        marginLeft:10,
        justifyContent: 'center'
    },
    info:{
        width:'65%'
    },
    laptop:{
        width:'100%',
        height:'55%'
    },
    heading:{
        marginTop:'5%',
        fontFamily:'Montserrat-Bold',
        fontSize:16,
        marginHorizontal:'4%',
        color:'#4d94ff'
    },
    description:{
        marginTop:'5%',
        fontFamily:'Montserrat-Bold',
        fontSize:14,
        marginHorizontal:'4%',
        color:'#8c8c8c'
    },
    bottom:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:'8%',
        marginHorizontal:'4%'
    },
    icon:{
        marginRight:'8%'
    },
    price:{
        fontFamily:'Montserrat-Bold',
        color:'#4d94ff'
    },
    time:{
        fontFamily:'Montserrat-Bold',
        color:'#8c8c8c'
    }
})
