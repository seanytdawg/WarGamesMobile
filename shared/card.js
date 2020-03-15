import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { shadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes'

export default Card=(props)=>{
    return(
        <View style = {styles.card}>
        <View style= {styles.cardConent}>
            {props.children}
        </View>
        </View>
    )
}
<Card>
    <Text></Text>
</Card>


const styles = StyleSheet.create({
card: {
 elevation: 3,
 backgroundColor: 'white',
 shadowOffset: {width: 1, height: 1},
 shadowColor: '#333',
 shadowOpacity: 0.3,
 marginHorizontal: 16,
 marginVertical: 20
},

cardConent: {
    marginHorizontal: 16,
    marginVertical: 20
}
})