import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialIcons } from '@expo/vector-icons';
import { useSQLiteContext } from 'expo-sqlite/next';
import { constants } from "../utils/constans";
import SintomaForm from "../components/SintomaForm";
import SintomaCard from "../components/SintomaCard";
const Diario = ()=>{
    const [open, setOpen] = useState(false)
    const db = useSQLiteContext();
    const [tasks, setTasks] = useState([])
    async function getAllTasks() {
       try {
       const firstRow = await db.getAllAsync('SELECT * FROM sintomas')
       console.log(firstRow)
       setTasks(firstRow)   
       } catch (error) {
           console.log(error)
       }
     }
     const saveSintoma = async(title, desc)=>{
        await db.runAsync(`INSERT INTO sintomas (title, descripcion) VALUES (?, ?)`, title, desc) 
        getAllTasks()
        setOpen(false)
     }
   useEffect(() => {
     getAllTasks();
   }, []);
    return(
        <View style={styles.container}>
                    <LinearGradient
        colors={[constants.verde, "rgba(9, 92, 55, 0.7)", 'rgb(8, 59, 36)']}
        style={styles.container}
      >
        <ScrollView>
         <Text>Diario</Text> 
         {
            tasks.length > 0 && tasks.map(item => <SintomaCard item={item}/>)
         }  
        </ScrollView>
        {open == true && <SintomaForm setOpen={setOpen} saveSintoma={saveSintoma}/>}
        
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