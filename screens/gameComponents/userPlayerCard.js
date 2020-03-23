import React, { useState, Component } from 'react'
import { Text, View, Image, Animated, StyleSheet } from 'react-native'
import card from '../../shared/card'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import FlipComponent from 'react-native-flip-component';



class PlayerCard extends Component {


    state = {

        cardPosition: new Animated.ValueXY({ x: 260, y: 100 }),
        isFlipped: this.props.battleStart
    }


    componentWillMount() {
        // this.animatedValue = new Animated.Value(0)

        // this.frontInterpolate = this.animatedValue.interpolate({
        //     inputRange: [0, 180],
        //     outputRange: ['0deg', '180deg']
        // })

        // this.backInterpolate = this.animatedValue.interpolate({
        //     inputRange: [0, 180],
        //     outputRange: ['180deg', '360deg']
        // })
        // let animatedValue = new Animated.Value(0)
        // fontInterpolate = animatedValue.interpolate({
        //     inputRange: [0, 180],
        //     outputRange: ['0deg', '180deg']
        // })
    }
    
    componentDidMount() {
        console.log(this.props.playCard)
        if(this.props.playCard){
            // console.log("play")
    this.cardSlide()
    // , ()=> this.setState({isFlipped: true})
        }
    }

    cardSlide = () => {
        Animated.timing(this.state.cardPosition, {
            toValue: { x: 100, y: -150 },
            duration: 2000
        }).start(
            // () => this.setState({ isFlipped: true })
        )
    }

    componentDidUpdate=()=>{

        console.log(this.state.isFlipped)
    }
    render() {


    
    null
        const styles = StyleSheet.create({
            userCard: {
                height: 150,
                width: 100,
                backfaceVisibility: 'hidden',
                position: 'absolute'
            },
            userCardFlipped: {
                height: 20,
                width: 15,
                position: 'absolute'
            },
            playerStats: {
                backgroundColor: 'white',
                height: 30,
                width: 100,
                top: 130,
                left: 0
            }
        })
        return (
            
            <Animated.View >
                <FlipComponent
                    isFlipped={this.props.battleStart}
                    frontView={
                        <Animated.View  >
                            <Image source={require('../../assets/baseball-card-back.png')} style={styles.userCard}
                            />
                        </Animated.View>
                    }
                    backView={
                        <Animated.View style={styles.userCardFlipped}>


                            <Image source={{ uri: this.props.userCardInPlayImage }} style={styles.userCard} />
                            <Animated.View style={styles.playerStats}>
                                <Text>{this.props.userCardInPlayName} </Text>
                                <Text>War: {this.props.userCardInPlayWar}</Text>
                            </Animated.View>

                        </Animated.View>

                    }
                />
                {/* 
            <Button onPress={()=>this.setState({isFlipped: true})}
          title="flip"  /> */}

            </Animated.View>
            
        )
    }
}




export default PlayerCard