import React, { useState } from "react";
import {View, Text, StyleSheet, Button, StatusBar} from "react-native"
import Target from "./Target";
const ConceptCard = ()=>{
    const [cards, setCards]= useState([])
    return(
        <View style={styles.container}>


            {
                cards.length >0 && <Target data={cards} exit={setCards}/> ||             <>
                <Text>Aprende a acpetar</Text>
               <Button title="Agregar" onPress={()=> setCards(["¿Como puedes aceptar algo que se siente tan mal? ¿Acaso no haces lo suficiente?", "Creeme, yo tambien me he preguntado lo mismo", "Y posiblemente creas que esto es imposible. Pero...", "A riesgo que me odies, si se puede y creeme es muy satisfactorio", 8])}/>           
               </>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    }
})
export default ConceptCard