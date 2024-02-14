import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SintomaForm = (props)=>{
    console.log(props)
    const {setOpen} = props
    return(
            <View style={styles.container}>
                <MaterialCommunityIcons name="close-circle" size={40} color="red" style={styles.close} onPress={()=> setOpen(false)}/>
                <Text style={styles.title}>Registra tu sintoma</Text>
                <TextInput placeholder="Como se llama tu sintoma" style={styles.input} key={1}/>
                <TextInput placeholder="Describe lo que sentiste" style={[styles.input, {heigth: 90}]} key={2}/>
                <Button title="Registrar" style={styles.buuton}/>
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        position: "absolute",
        top: 10,
        width: "90%",
        margin: 10,
        padding: 20,
        borderRadius: 10,
    },
    title:{
        fontSize: 15,
        fontWeight: "bold"
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "black",
        padding: 10,
        margin: 5,
        width: "90%"
    },
    close: {
        position: "absolute",
        right: -10,
        top: -10,
    },
    buuton: {
        margin: 10
    }
})
export default SintomaForm