import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Drawer from './routes/drawer'
import { TextInput } from 'react-native-gesture-handler';
import * as Font from 'expo-font'
import {AppLoading} from 'expo'
import Navigator from './routes/homeStack'

const getFonts =()=> Font.loadAsync({
    'SquadaOne-Regular': require('./assets/fonts/SquadaOne-Regular.ttf'),
    // 'nunito-bold': require('./assets/fonts/Nunito-bold.ttf')
  })

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  const [name, setName] = useState('Sean')
  const buttonHandler = ()=>{
    setName("Liam")
  }
  if (fontsLoaded){
  return (
    <Navigator/>
    // <View style={styles.container}>
    //   <View style = {styles.header}>
    // <Text style={styles.boldText}>Yo {name}</Text>
    // <Text style={styles.text}>Enter Name: </Text>
    // <TextInput onChangeText = {(value)=>{setName(value)}} />
    //   </View>
    //   <View>
    //     <Button title='homie' onPress={buttonHandler}/>
    //     </View>
      /* <Drawer /> */
  //   </View>
  // 
  )
}
  else{
    return (
<AppLoading 
startAsync=  {getFonts}
onFinish={()=>setFontsLoaded(true)}/>)
  }
}

const styles = StyleSheet.create({

  text: {
    fontSize: 45,
    textAlign: "center",
    fontFamily: 'SquadaOne-Regular'
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20
  },
  header: {
    padding: 20
  },
  boldText: {
    fontWeight: 'bold'
  }, 
  body: {
    backgroundColor: 'yellow', 
    padding: 20
  }
});

