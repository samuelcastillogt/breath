import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const SintomaForm = (props)=>{
    const {setOpen, saveSintoma} = props
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const dave = ()=>{
        saveSintoma(title, desc)
    }

    return(
            <View style={styles.container}>
                <MaterialCommunityIcons name="close-circle" size={40} color="red" style={styles.close} onPress={()=> setOpen(false)}/>
                <Text style={styles.title}>Registra tu sintoma</Text>
                <TextInput placeholder="Como se llama tu sintoma" 
                           style={styles.input} 
                           key={1}
                           onChange={(e)=> setTitle(e.nativeEvent.text)}
                />
                <TextInput placeholder="Describe lo que sentiste" 
                           style={styles.input} 
                           key={2}
                           onChange={(e)=> setDesc(e.nativeEvent.text)}
                />
                <Button title="Registrar" style={styles.buuton} onPress={dave} disabled={title.length == 0 || desc.length ==0 }/>
            </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        position: "absolute",
        top: "10%",
        width: "90%",
        margin: 10,
        padding: 20,
        borderRadius: 10,
        height: 500,
        zIndex: 99999999
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