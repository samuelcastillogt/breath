import React, { useState } from "react";
import {View, Text, StyleSheet, Button} from "react-native"
import Target from "./Target";
const ConceptCard = ()=>{
    const [cards, setCards]= useState([])
    return(
        <View style={styles.container}>


            {
                cards.length >0 && <Target data={cards} exit={setCards}/> ||             <>
                <Text>Aprende a acpetar</Text>
               <Button title="Agregar" onPress={()=> setCards([2, 3, 5, 6, 8])}/>           
               </>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
export default ConceptCard