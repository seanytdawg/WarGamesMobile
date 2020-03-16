import React from 'react'
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header(){
    return ( 
        <ImageBackground source={require('../assets/baseball-header.jpg')} style={styles.header}>
        <View style={styles.headerTitle}>
                <Image style={styles.image}  source = {require('../assets/Babe-Ruth.jpg')}/>
            <Text style = {styles.headerText}>Play Ball</Text>
    </View>
         </ImageBackground>
        )

    
}
const styles = StyleSheet.create ({
    header: {
        top: -20,
        flex: 1,
        width: '175%',
        height: '140%',
        resizeMode: 'cover',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        letterSpacing: 1,
    },
    headerTitle: {
        flexDirection: 'row'
    },
    image: {
        top: 10,
        left: 30,
    height: 70,
    width: 55,
    marginHorizontal: 10
    }

})
