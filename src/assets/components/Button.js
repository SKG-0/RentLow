import React from 'react'
import { View, Text,StyleSheet} from 'react-native'

export default function Button({text}) {
    return (
        <View style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    button:{
        width: '90%',
        height: '27.5%',
        alignSelf: 'center',
        backgroundColor: '#4d94ff',
        marginTop: '5%',
        borderRadius: 10,
        
    },
    text:{
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'NotoSansJP-Bold'
    }
})
