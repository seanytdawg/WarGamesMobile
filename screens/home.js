import React, {useState} from 'react'
import { Text, View, Button, FlatList, Image, Modal } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../shared/card'
import {MaterialIcons} from '@expo/vector-icons'
import ReviewForm from './reviewForm'

const Home = (props)=> {
    const [reviews, setReviews] = useState([
        { title: "The Joker", review: "Great movie, good portrayal of mental illness", rating: 7.6, key: 1},
        { title: "Once Upon A Time In Hollywood", review: "Great movie,60s vibes", rating: 8, key: 2},
        { title: "Knives Out", review: "Great movie, good murder mystery", rating: 7.2, key: 3}
    ])
    
    const [modalOpen, setModalOpen] = useState(false)
    console.log("home")
const pressHandlerReview = (e)=>{
    console.log("pressed", e)
        props.navigation.navigate('ReviewDetails')
    }
    const pressHandlerAbout = ()=>{
        props.navigation.navigate('About')

    }
    return (
        <View>
            <Modal visible={modalOpen}>
                <View>
                    <Text>Yo from Modal</Text>
                    <MaterialIcons
                        name='close'
                        size={24}
                        onPress={() => { setModalOpen(false) }}
                        />
                        <ReviewForm/>
                </View>
            </Modal>
          
                <MaterialIcons 
                name='add'
                size={24}
                onPress = {()=>{setModalOpen(true)}}
                />
    <FlatList
        data={reviews}
        renderItem={({item})=> (
            <TouchableOpacity onPress = {()=>props.navigation.navigate("ReviewDetails", item)}>
                <Card>
                <Text>{item.title}</Text> 
                </Card>
            </TouchableOpacity>
        )}/>
        </View>
    )
}

export default Home