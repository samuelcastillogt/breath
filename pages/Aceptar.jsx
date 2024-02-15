import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet } from "react-native";

import ConceptCard from "../components/ConceptCard";
const Aceptar = ()=>{
    return(
        <>
             <ConceptCard />               
        </>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Aceptar