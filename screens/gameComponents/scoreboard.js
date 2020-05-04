import React from 'react'

import {View, Text, Image, StyleSheet, Animated, ImageBackground} from 'react-native'

export default  function Scoreboard(props){


    let userScore = Math.round(props.userScore)
    let computerScore = Math.round(props.computerScore)
    return (
    

    <Animated.View>
        {/* <Animated.Image source={require('../../assets/vis-sign.png')} style = {styles.visistorSign}/>
        <Animated.Image source={require('../../assets/home-sign.png')} style = {styles.homeSign}/> */}
            <ImageBackground source={require('../../assets/vis-sign.png')} style={styles.visistorSign}>
        <Animated.Text style={styles.visText}> {computerScore}  </Animated.Text>
            </ImageBackground>
            <ImageBackground source={require('../../assets/home-sign.png')} style={styles.homeSign}>
        <Animated.Text style={styles.homeText}> {userScore}</Animated.Text>
        </ImageBackground>
    </Animated.View>
    
    )


}

const styles = StyleSheet.create({
    visistorSign: {
        // backgroundColor: 'blue',
        top: -320,
        left: 130,
        height: 100,
        width: 70,
        // zIndex: 10
    },
    homeSign: {
        // backgroundColor: 'green',
        top: -420,
        left: 250,
        height: 100,
        width: 80,
        // zIndex: 10
    },
    visText: {
        top: 50,
        left: 27,
        height: 60,
        width: 30,
        color: 'yellow'
    },
    homeText: {
        top: 50,
        left: 27,
        height: 60,
        width: 30,
        color: 'yellow'
    }
}
)

