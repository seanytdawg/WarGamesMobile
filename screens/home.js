import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {

    return (
        <View>
            <Text>Yo from Home</Text>
            <Button title="Play Classic Game" onPress={() => props.navigation.navigate("ClassicGame")}></Button>
            <Button title="Leaderboard" onPress={() => props.navigation.navigate("LeaderBoard")}></Button>
            <Button title="About" onPress={() => props.navigation.navigate("About")}></Button>
        </View>
    )
}



