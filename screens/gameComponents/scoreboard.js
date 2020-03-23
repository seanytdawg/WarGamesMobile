import React from 'react'

import {View, Text} from 'react-native'

export default  function Scoreboard(props){


    return (
    
    <View>

        <Text>cpu: {props.computerScore}</Text>
        <Text>player1: {props.userScore}</Text>
    </View>
    
    )


}

