import React from 'react'
import { Text, View, Image } from 'react-native'
import card from '../shared/card'

const reviewDetails = (props)=>{

    return (
        <Card>
        <View>
        <Text>{props.navigation.getParam('title')}</Text>
        <Text>{props.navigation.getParam('review')}</Text>
        <Text>{props.navigation.getParam('rating')}</Text>
         <Image source={require('../assets/thejoker.jpg')} /> 
        </View>
        </Card>
    )
}


export default reviewDetails