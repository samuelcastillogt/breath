import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, ScrollView, Image, TouchableHighlight, Dimensions, StatusBar } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import Breath from "../components/Breath";
import { constants } from "../utils/constans";

const Respiracion = ({navigation, route})=>{
    const [exercise, setExercise] = useState([])
    const [play, setPlay] = useState(false)
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setExercise([])
        });
        return unsubscribe;
     }, [navigation]);
   
    return(
        <>
            {
                exercise.length == 0 && <View style={styles.container}> 
                <Image source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YRDo5LoxRqfHMLcE91U0FkYE8Hy-ZCWdU-h3_o9hm1zzG1FQ"}} style={styles.img}/>
                <Text style={styles.title}>Escoge tu ejercicio</Text>
                <ScrollView>
                    <TouchableHighlight style={styles.option} onPress={()=> setExercise([4,6,8])}>
                    <Text 
                        style={styles.optionTitle}
                    > Basica
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
                    <Breath ejerccio={exercise} close={setExercise} play={play}/>
                    <View style={styles.buttonContainer}>
                        {
                            play == true      ?  <TouchableHighlight onPress={()=> {
                                setExercise([])
                                setPlay(false)
                                }} style={styles.button}>
                    <FontAwesome name="stop" size={40} color="white" />
                    </TouchableHighlight>  : 
                    <TouchableHighlight onPress={()=> setPlay(true)} style={styles.button}>
                    <FontAwesome name="play" size={40} color="white" />
                    </TouchableHighlight>
                        }
                     
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
        fontSize: 30,
        color: constants.verde,
        fontWeight: "bold"
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
        borderRadius: 200,
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      option: {
        padding: 10,
        height: 50,
        backgroundColor: constants.verde,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
        width: 300
      },
      optionTitle: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
      },
      img:{
        width: 200,
        height: 200
      }
      
})
export default Respiracion