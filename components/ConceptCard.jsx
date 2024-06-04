import React, { useState } from "react";
import {View, Text, StyleSheet, ScrollView, TouchableHighlight, Image} from "react-native"
import Target from "./Target";
import { constants } from "../utils/constans";
const ConceptCard = ()=>{
    const [cards, setCards]= useState([])
    return(
        <View style={styles.container}>


            {
                cards.length >0 && <Target data={cards} exit={setCards}/> ||             <>
                <Image style={styles.img} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/018/982/656/small/positive-thinking-concept-businessman-put-positive-thinking-on-big-head-symbolic-creative-strategy-for-success-enjoy-feeling-and-dream-control-strategy-png.png"}} />
                <Text style={styles.title}>Aprende a aceptar</Text>         
               <ScrollView>
                    <TouchableHighlight style={styles.option} onPress={()=> setCards(["¿Como puedes aceptar algo que se siente tan mal? ¿Acaso no haces lo suficiente?", "Creeme, yo tambien me he preguntado lo mismo", "Y posiblemente creas que esto es imposible. Pero...", "A riesgo que me odies, si se puede y creeme es muy satisfactorio", 8])}>
                    <Text 
                        style={styles.optionTitle}
                    > Que Diablos es Aceptar
                    </Text>  
                    </TouchableHighlight>
                </ScrollView>
               </>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title:{
        fontSize: 30,
        color: constants.verde,
        fontWeight: "bold"
    },
    img:{
        width: 200,
        height: 200
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
})
export default ConceptCard