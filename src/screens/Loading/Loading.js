import React from 'react'
import {Image,SafeAreaView,StyleSheet,Text } from 'react-native'
import logo_white from '../../assets/images/logo_white.png'
export default function Loading() {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={logo_white} style={styles.image} />
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    image:{
        width:'70%',
        height:'60%',
        alignSelf:'center'
    },
    container:{
        justifyContent:'center',
        backgroundColor:'#4d94ff',
        flex:1
    }
})
