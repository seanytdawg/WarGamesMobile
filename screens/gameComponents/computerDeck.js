import React from 'react'
import { Text, View, Image, Animated } from 'react-native'
import card from '../../shared/card'

function ComputerDeck(props) {
    return (
        <Animated.View style={styles.deck}>
        <Image source={require('../../assets/card-deck.png')} style={styles.deckImage} />
        </Animated.View>
    )
}

const styles = {
    deck: {
        top: 10,
        left: 10
    },

    deckImage: {
        height: 150,
        width: 100
    }
}


export default ComputerDeck