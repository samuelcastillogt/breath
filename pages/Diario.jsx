import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';

import { constants } from "../utils/constans";
import SintomaForm from "../components/SintomaForm";
const Diario = ()=>{
    const [open, setOpen] = useState(false)
    return(
        <View style={styles.container}>
                    <LinearGradient
        colors={[constants.verde, "rgba(9, 92, 55, 0.7)", 'rgb(8, 59, 36)']}
        style={styles.container}
      >
        <ScrollView>
         <Text>Diario</Text>   
        </ScrollView>
        {open == true && <SintomaForm setOpen={setOpen}/>}
        
      </LinearGradient>
      <MaterialIcons name="add-box" size={60} color="pink" style={styles.addButton} onPress={()=>setOpen(true)}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    addButton: {
        position: "absolute",
        bottom: 10,
        right: 20,
        elevation: 10
    }
})
export default Diario