import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const SintomaCard = (props)=>{
    const {title, descripcion} = props.item
    const [open, setOpen] = useState(false)
    return(
        <View style={styles.container}>
            {
                open == false && <TouchableHighlight onPress={()=> setOpen(true)}>
             <Text style={styles.title}>{title}</Text>               
            </TouchableHighlight> ||
            <View>
                <AntDesign name="closecircle" size={30} color="red" style={styles.close} onPress={()=> setOpen(false)}/>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{descripcion}</Text>
            </View>
            }
            

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: 300,
        backgroundColor: "green",
        margin: 10,
        padding: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignContent: "center"
    },
    close:{
        position: "absolute",
        right: 5,
        top: -20,
        zIndex: 999,
        backgroundColor: "white",
        borderRadius: 30,
        padding:0
    },
    title:{
        fontSize: 25,
        fontWeight: "bold",
        color: "white"
    },
    text:{
        fontSize: 20,
        fontWeight: "bold",
        color: "white"
    }
})
export default SintomaCard