import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView, Button, TouchableHighlight, Dimensions, StatusBar } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import Breath from "../components/Breath";
import { constants } from "../utils/constans";

const Respiracion = ()=>{
    const [exercise, setExercise] = useState([])

    return(
        <>
            {
                exercise.length == 0 && <View style={styles.container}> 
                <Text style={styles.title}>Escoge tu ejercicio</Text>
                <ScrollView>
                    <TouchableHighlight style={styles.option} onPress={()=> setExercise([4,6,8])}>
                    <Text 
                        style={styles.optionTitle}
                    > Base
                    </Text>  
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.option} onPress={()=> setExercise([2,3,4,5,6])}>
                    <Text 
                        style={styles.optionTitle}
                    > Relajacion Rapida
                    </Text>  
                    </TouchableHighlight>
                </ScrollView>
                </View>
            }

            {
                exercise.length > 0 && 
                <View style={[styles.breath]}>
                    <Breath ejerccio={exercise} close={setExercise}/>
                    <View style={styles.buttonContainer}>
                     <TouchableHighlight onPress={()=> setExercise([])} style={styles.button}>
                    <FontAwesome name="stop" size={40} color="white" />
                    </TouchableHighlight>                       
                    </View>

                </View>
                
            }
            
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        flex: 1,
        paddingTop: StatusBar.currentHeight
    },
    breath:{
        flex: 1,
        display: "flex",
        width: Dimensions.get("screen").width,
        position: "relative"
      },
    title:{
        fontSize: 30
    },
    buttonContainer:{
        width: "100%", 
        justifyContent: "center", 
        alignItems: "center",         
        position: "absolute",
        bottom: 100,
    },
    button: {
        padding: 20,
        color: "red",
        borderRadius: 50,
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      option: {
        padding: 10,
        height: 50,
        backgroundColor: constants.verde,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10
      },
      optionTitle: {
        fontSize: 15,
        color: "white"
      },
      
})
export default Respiracion