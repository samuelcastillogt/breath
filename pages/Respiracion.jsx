import React, {useEffect, useState} from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
const ejerccio = [4,6,8]
const Respiracion = ()=>{
    const [index, setIndex] = useState(0)
    const counter = ()=>{
        for(let i = 0; i <= ejerccio.length; i++){
            console.log("hola" + i)
        }
    //   ejerccio.forEach((e, i) => console.log("El numero es "+e))  
    }
    useEffect(counter,[])
    return(
        <>
            <View style={styles.container}>
                <Text>Respiracion</Text>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
export default Respiracion