import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";

import ConceptCard from "../components/ConceptCard";
const Aceptar = ()=>{
    return(
        <View style={styles.container}>
             <ConceptCard />               
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight
    }
})
export default Aceptar