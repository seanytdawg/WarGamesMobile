import React, {useState, Component} from 'react'
import { Text, View, Image, Animated, StyleSheet, Button } from 'react-native'
import card from '../../shared/card'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { render } from 'react-dom';
import FlipComponent from 'react-native-flip-component';



class PlayerCard extends Component{

    
  state = {

      cardPosition: new Animated.ValueXY({ x: 15, y: -280 }),
      isFlipped: false
  }


    componentWillMount(){
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
     flipCard=()=>{
        Animated.timing(this.animatedValue, {
            toValue: 180,
            duration: 800
        }).start()
    }
     cardSlide = () => {
        Animated.timing(this.state.cardPosition, {
            toValue: { x: 100, y: -150 },
            duration: 2000
        }).start(
           ()=> this.setState({ isFlipped: true })
        )
    }
    componentDidMount(){
        this.cardSlide()
    }

    
    render(){
        // const frontAnimatedStyle = {
        //     transform: [
        //         {rotateY: this.frontInterpolate }
        //     ]
    
        // }
    
        // const backAnimatedStyle = {
        //     transform: [
        //         {rotateY: this.backInterpolate}
        //     ]
        // }

    const styles = StyleSheet.create({
        computerCard: {
            height: 150,
            width: 100,
            backfaceVisibility: 'hidden',
            position: 'absolute'
        },
        computerCardFlipped: {
            height: 20,
            width: 15, 
            position: 'absolute'
        },
        playerStats: {
            backgroundColor: 'white',
            height:  30,
            width: 100,
            top: 130,
            left: 0
        }
    })

    return (
        <Animated.View >
            <FlipComponent
                isFlipped={this.state.isFlipped}
                frontView={
                    <Animated.View style={this.state.cardPosition.getLayout()} >
                        <Image source={require('../../assets/baseball-card-back.png')} style={styles.computerCard}
                        />
                    </Animated.View>
                }
                backView={
                    <Animated.View style={[styles.computerCardFlipped, this.state.cardPosition.getLayout()]}>

                        <Image source={{uri: this.props.computerCardInPlayImage }} style={styles.computerCard}/>
                        <Animated.View style={styles.playerStats}>
                        <Text>{this.props.computerCardInPlayName} </Text>
                    <Text>War: {this.props.computerCardInPlayWar}</Text>
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