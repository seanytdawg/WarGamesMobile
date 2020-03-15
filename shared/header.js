import React from 'react'
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'

export default function Header(){
    return ( 
        <ImageBackground source={require('../assets/download-1.jpg')} style={styles.header}>
        <View style={styles.headerTitle}>
                <Image style={styles.image}  source = {require('../assets/movie-icon.jpg')}/>
            <Text style = {styles.headerText}>Mooooooovies</Text>
    </View>
         </ImageBackground>
        )

    
}
const styles = StyleSheet.create ({
    header: {
        backgroundColor: 'pink',
        width: '100%',
        height: '100%',
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
    height: 45,
    width: 55,
    marginHorizontal: 10
    }

})
