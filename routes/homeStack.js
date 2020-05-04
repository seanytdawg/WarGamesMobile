import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home'
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'
import {StyleSheet} from 'react-native'
import ClassicGame from '../screens/classicGame'
import LeaderBoard from '../screens/leaderBoard'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: ()=> < Header/>
        }
    },
    ClassicGame: {
        
        screen: ClassicGame
    },
    About: {
        screen: About
    },
    LeaderBoard: {
        screen: LeaderBoard
    },
    
}

const HomeStack = createStackNavigator(screens,
     {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        
    }
}
)

export default createAppContainer(HomeStack)