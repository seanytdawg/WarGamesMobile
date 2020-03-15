import {createDrawerNavigator} from 'react-navigation-drawer'
import { createAppContainer } from 'react-navigation'
import HomeStack from './homeStack'
import AboutStack from './aboutStack'




const RootDrawNavigator = createDrawerNavigator({
    Home: { screen: HomeStack},
    About: {
        screen: AboutStack
    }
    
})

export default createAppContainer(RootDrawNavigator)