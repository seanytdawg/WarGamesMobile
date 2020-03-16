import {Text, View, Animated, ImageBackground} from 'react-native'
import React, {Component} from 'react'
import PlayerCard from "./gameComponents/playerCard"
import UserDeck from "./gameComponents/userDeck"
import ComputerDeck from "./gameComponents/computerDeck"
export default class ClassicGame extends Component {

state = {
    allPlayers: [],
    ComputerDeck: [],
    userDeck: [],
    elligiblePlayers: []

}
componentDidMount(){
    this.getPlayers()
}


 getPlayers=()=>{
   fetch('http://localhost:3000/players')
   .then(res=>res.json())
   .then(allPlayers=>{
       this.setState({allPlayers})
       allPlayers.forEach(player => {
           if(player.war > 50){
               this.setState({elligiblePlayers: [...this.state.elligiblePlayers, player]})
            }
if(this.state.elligiblePlayers.length > 290){
    let i = 0
    while (i < 52){
    let randomPlayer1 = {}
   let  randomPlayer2 = {}
            randomPlayer1 = this.state.elligiblePlayers[Math.floor(Math.random() * this.state.elligiblePlayers.length)]
            this.setState({userDeck: [...this.state.userDeck, randomPlayer1]})
            this.setState({elligiblePlayers: this.state.elligiblePlayers.filter(player=>player != randomPlayer1)})
        randomPlayer2 =   this.state.elligiblePlayers[Math.floor(Math.random() * this.state.elligiblePlayers.length)]
    this.setState({ computerDeck: [...this.state.userDeck, randomPlayer2] })
    this.setState({ elligiblePlayers: this.state.elligiblePlayers.filter(player => player != randomPlayer2) })
    i++
    }
if(this.state.computerDeck.length > 50){
    console.log("decks",this.state.computerDeck.length, this.state.userDeck.length)
}
}           
       });
    //    console.log("state",this.state)
   })
}



render(){    

return(



    
        // <ImageBackground source={require('../assets/baseball-stadium.jpg')}>
    <Animated.View>
    <ComputerDeck/>
    <UserDeck />
         {this.state.allPlayers.map(player => 
        <PlayerCard
        war = {player.war}
        image = {player.image}
        name = {player.name}
        />)
}
    </Animated.View>
    // </ImageBackground>
)
}

}


const styles = {

    deck: {
        flex: .5,
        height: 10,
        width: 10
    }
}