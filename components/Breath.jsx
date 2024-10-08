import React, {useEffect, useState, useRef} from "react";
import { StyleSheet, Text, View, Dimensions, Animated, Button } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { constants } from "../utils/constans";
const { width, height } = Dimensions.get("window");
const circleWidth = width / 2;
const Breath = (props)=>{
    const {ejerccio, close, play} = props

    const move = useRef(new Animated.Value(0)).current;
    const textOpacity = useRef(new Animated.Value(1)).current;

      useEffect(()=>{
        if(play == true){
          Animated.loop(
            Animated.sequence(
                
                   ejerccio.map(i => (  
                          Animated.sequence([
                          Animated.parallel([
                            Animated.timing(textOpacity, {
                              toValue: 1,
                              duration: 300,
                              useNativeDriver: true,
                            }),
                            Animated.timing(move, {
                              toValue: 1,
                              duration: i * 1000,
                              useNativeDriver: true,
                            }),
                          ]),
                          Animated.parallel([
                            Animated.timing(textOpacity, {
                              delay: 100,
                              toValue: 0,
                              duration: 300,
                              useNativeDriver: true,
                            }),
                            Animated.timing(move, {
                              delay: 1000,
                              toValue: 0,
                              duration: i * 1000,
                              useNativeDriver: true,
                            }),
                          ]),
                        ])))
                
                    
          )).start()

        }
      }, [play])
      const translate = move.interpolate({
        inputRange: [0, 1],
        outputRange: [0, circleWidth / 6],
      });
      const exhale = textOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0],
      });
      return(
        <View style={styles.container}>
        <Animated.View
        style={{
          width: circleWidth,
          height: circleWidth,
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center",
          opacity: textOpacity,
          flex: 1,
          
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "red"
          }}
        >
          Inhale
        </Text>
      </Animated.View>
      <Animated.View
        style={{
          width: circleWidth,
          height: circleWidth,
          ...StyleSheet.absoluteFill,
          alignItems: "center",
          justifyContent: "center",
          opacity: exhale,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "red"
          }}
        >
          Exhale
        </Text>
      </Animated.View>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
        const rotation = move.interpolate({
          inputRange: [0, 1],
          outputRange: [`${item * 45}deg`, `${item * 45 + 180}deg`],
        });
        return (
          <Animated.View
            key={item}
            style={{
              opacity: 0.1,
              backgroundColor: "blue",
              width: circleWidth,
              height: circleWidth,
              borderRadius: circleWidth / 2,
              ...StyleSheet.absoluteFill,
              transform: [
                {
                  rotateZ: rotation,
                },
                { translateX: translate },
                { translateY: translate },
              ],
            }}
          >
          </Animated.View>
        );
      })}
     
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        
        height: 500,
        alignItems: "center",
        justifyContent: "center",
        left: width / 4,
        top: height / 4,
      },

})
export default Breath