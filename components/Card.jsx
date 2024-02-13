import React from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Card = ()=>{
    return(
        <TouchableHighlight style={styles.container} onPress={()=> console.log("ksksks")}>
            <>
            <AntDesign name="upcircle" size={50} color="black" />
            <Text style={styles.title}>Esta es la card</Text>            
            </>

        </TouchableHighlight>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(168, 103, 103, 0.4)",
        margin: 10,
        height: 150,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})
export default Card