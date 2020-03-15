import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewDetails'
import About from '../screens/about'
import Header from '../shared/header'
import React from 'react'
import {StyleSheet} from 'react-native'
const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: ()=> < Header/>
        }
    },
                            ReviewDetails: {
                                screen: ReviewDetails,
                                // navigationOptions: {
                                //     title: 'Reviw Details',
                                //     headerStyle: {backgroundColor: 'pink'}
                                // }
                            },
    About: {
        screen: About
    }
}

const HomeStack = createStackNavigator(screens,
     {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: {backgroundColor: 'pink'}
    }
}
)

export default createAppContainer(HomeStack)