import React from 'react'

import {View, Text, Image, StyleSheet} from 'react-native'

export default  function Scoreboard(props){


    return (
    
    <View>
        {/* <Image source={require('../../assets/vis-sign.png')} style = {styles.visistorSign}/>
        <Image source={require('../../assets/home-sign.png')} style = {styles.visistorSign}/> */}
        <Text>cpu: {props.computerScore}</Text>
        <Text>player1: {props.userScore}</Text>
    </View>
    
    )


}

const styles = StyleSheet.create({
    visistorSign: {
        top: 200,
        left: 200,
        height: 100,
        width: 100
    }
}
)

