import React from 'react'
import { Text, View, Image, Animated } from 'react-native'
import card from '../../shared/card'

function UserDeck(props) {
    return (
            <Animated.View style = {styles.deck}>
                <Image source={require('../../assets/card-deck.png')} style = {styles.deckImage}/>
            </Animated.View>
    )
}

const styles = {

    deck: {
        top: 300,
        left: 260
    },

    deckImage: {
        height: 150,
        width: 100
    }
}

export default UserDeck