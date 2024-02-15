import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Directions, Gesture, GestureDetector} from 'react-native-gesture-handler'
const data = ["Priemero", "segundo"]
const ConceptCard = ()=>{
    const [indexActive, setIndexActive] = useState(0)
    const atras = Gesture.Fling().direction(Directions.RIGHT)
    .onStart(() => {
      console.log("atras")
    });
    const adelante = Gesture.Fling().direction(Directions.LEFT)
    .onStart(() => {
      console.log("adelante")
    });
      return (
        <GestureHandlerRootView style={{flex: 1}}>
        <GestureDetector gesture={Gesture.Exclusive(atras, adelante)}>
            <View style={styles.container}>
                <Text>Hol</Text>
            </View>
        </GestureDetector>
        </GestureHandlerRootView>
      );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: "80%",
        height: Dimensions.get("screen").height /2,
        borderRadius: 10,
        margin: 5,

    },
    test: {
        flex:1
    }
})
export default ConceptCard