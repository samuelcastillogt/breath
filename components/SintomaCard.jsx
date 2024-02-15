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
                <Text>{descripcion}</Text>
            </View>
            }
            

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        width: "80%",
        backgroundColor: "white",
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    close:{
        position: "absolute",
        right: 5,
        top: -20,
        zIndex: 999
    },
    title:{
        fontSize: 25,
        fontWeight: "bold"
    }
})
export default SintomaCard