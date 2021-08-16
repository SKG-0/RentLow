import React from 'react'
import {Text,Image,StyleSheet,TouchableOpacity } from 'react-native'

export default function Category({image,text}) {
    return (
        <TouchableOpacity style={styles.category}>
            <Image source={image} style={styles.image} />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    category:{
        width:100,
        height:90,
        backgroundColor:'white',
        borderRadius:10,
        elevation:5
    },
    image:{
        width:'50%',
        height:'55%',
        alignSelf:'center',
        marginTop:'5%'
    },
    text:{
        textAlign:'center',
        fontFamily:'Montserrat-Bold',
        marginTop:'5%',
        fontSize:12
    }
})
