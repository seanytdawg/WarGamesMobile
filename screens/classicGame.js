import {Text, View, Animated, ImageBackground, Button} from 'react-native'
import React, {Component} from 'react'
import PlayerCard from "./gameComponents/userPlayerCard"
import UserDeck from "./gameComponents/userDeck"
import ComputerDeck from "./gameComponents/computerDeck"
import ComputerCard from './gameComponents/computerPlayerCard'
import UserCard from './gameComponents/userPlayerCard'
import Scoreboard from './gameComponents/scoreboard'
export default class ClassicGame extends Component {

state = {
    allPlayers: [],
    computerDeck: [],
    userDeck: [],
    elligiblePlayers: [],
    gameStart: false, 
    playCard: false,
   cardPosition: new Animated.ValueXY({ x: 200, y: 100 }), 
   battleStart: false,
   computerCardInPlay: null,
   userCardInPlay: null, 
    userPointTotal: 0,
    computerPointTotal: 0, 
    cardsInPlay: true

}
componentDidMount(){
    this.getPlayers()
    this.setComputerCardInPLay()
    this.setUserCardInPlay()
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
    console.log("computer decks",this.state.computerDeck.length, this.state.userDeck.length)
    let computerCardInPlay = this.state.computerDeck[Math.floor(Math.random() * this.state.computerDeck.length)]
    this.setState({ computerCardInPlay: computerCardInPlay})
    let userCardInPlay = this.state.userDeck[Math.floor(Math.random() * this.state.userDeck.length)]
    this.setState({ userCardInPlay: userCardInPlay })

}
}           
       });
    //    console.log("state",this.state)
   })
}

setComputerCardInPLay=()=>{
    let computerCardInPlay = this.state.computerDeck[Math.floor(Math.random() * this.state.computerDeck.length)]
    if (this.state.computerDeck.length > 0) {

    this.setState({computerCardInPlay: computerCardInPlay})
    }
    // let userCardInPlay = this.state.userDeck[Math.floor(Math.random() * this.state.userDeck.length)]

    if(this.state.computerCardInPlay){
        this.setState({computerDeck: this.state.computerDeck.filter(player=>player != computerCardInPlay)})
    }
}

setUserCardInPlay=()=>{
    if (this.state.computerDeck.length > 0) {
    let userCardInPlay = this.state.userDeck[Math.floor(Math.random() * this.state.userDeck.length)]
    this.setState({userCardInPlay: userCardInPlay})
    if (userCardInPlay) {
        this.setState({ userDeck: this.state.userDeck.filter(player => player != userCardInPlay) })
    }
    }
}

calculateBattleScore(){
// if(this.state.computerCardInPlay){
//    if (this.state.computerCardInPlay.war >= this.state.userCardInPlay.war){
//        this.setState({ computerPointTotal = this.state.computerPointTotal + (this.state.computerCardInPlay.war - this.state.userCardInPlay.war)})
//    }
//     else if (this.state.computerCardInPlay.war < this.state.userCardInPlay.war) {
//         this.setState({ userPointTotal = this.state.userPointTotal + (this.state.userCardInPlay.war - this.state.computerCardInPlay.war) })
//     }
// }

if(this.state.userCardInPlay.war > this.state.computerCardInPlay.war){
    let scoreForUser = this.state.userCardInPlay.war - this.state.computerCardInPlay.war
    this.setState({userPointTotal: this.state.userPointTotal + scoreForUser})
}
else{
    let scoreForComputer = this.state.computerCardInPlay.war - this.state.userCardInPlay.war
    this.setState({ computerPointTotal: this.state.computerPointTotal + scoreForComputer })
// console.log(scoreForComputer)
}
}

resetBoard=()=>{
    setTimeout(() => [this.setState({ cardsInPlay: false }), this.setUserCardInPlay(), this.setComputerCardInPLay()], 1000),
    // ()=>this.setState({cardsInPlay: true}), 
    ()=>console.log("cards in play?",this.state.cardsInPlay)
}


render(){    
    
    const cardSlide = () => {
        Animated.timing(this.state.cardPosition, {
            toValue: { x: 150, y: -50 },
            duration: 2000
        }).start(

          ()=> [this.setState({battleStart: true}),
             this.calculateBattleScore(), 
                this.resetBoard(), this.setState({cardsInPlay: true})
            //  this.setState({cardsInPlay: false})
            ]
          
        )
    }


return(


    this.state.gameStart? 

    
        // <ImageBackground source={require('../assets/baseball-stadium.jpg')}>

    <Animated.View>
    <ComputerDeck/>
    <UserDeck />
     <View style={[{ left: -120, top: 220 }]}>
    <Button
    title="Play Card"
    onPress={()=>
        // console.log("hi")
        // this.setState({playCard: true})
        cardSlide() 
        // => this.setState({ playCard: true }))
    }
    />
     </View>
     <Scoreboard
     userScore = {this.state.userPointTotal}
     computerScore = {this.state.computerPointTotal}
     />
    {this.state.cardsInPlay? 
        <ComputerCard
        // cardsInPlay={this.state.cardsInPlay}
        computerCardInPlayName={this.state.computerCardInPlay.name}
        computerCardInPlayImage={this.state.computerCardInPlay.image}
        computerCardInPlayWar={this.state.computerCardInPlay.war}
        />
: 
null
    }
    {this.state.cardsInPlay ?
            <Animated.View style={this.state.cardPosition.getLayout()}
>
        <UserCard
        cardsInPlay={this.state.cardsInPlay}
        battleStart={this.state.battleStart}
        playCard = {this.state.battleStart}
                    userCardInPlayName={this.state.userCardInPlay.name}
                    userCardInPlayImage={this.state.userCardInPlay.image}
                    userCardInPlayWar={this.state.userCardInPlay.war}
        />
        </Animated.View>
        :
        null}

    </Animated.View>

    :
        <Button
            title="Start Game"
            type="outline"
            onPress={()=>this.setState({gameStart: true})}
        />

    // </ImageBackground>
)
}

}


const styles = {

    playCardButton: {
        height: 100,
        left: -100, 
        top: 300
    },
    deck: {
        flex: .5,
        height: 10,
        width: 10
    }
}