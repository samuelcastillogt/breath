import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, StatusBar, Image } from "react-native";

import ConceptCard from "../components/ConceptCard";
const Aceptar = ({navigation})=>{
    return(
        <View style={styles.container}>
             <ConceptCard navigation={navigation}/>               
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        justifyContent: "center",
        alignItems: "center"
    },
    img:{
        width: 200,
        height: 200
    }
})
export default Aceptar