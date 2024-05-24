import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView , Image} from "react-native";
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
                    <View
        
        style={styles.container}
      >
        <ScrollView>
          <View style={styles.headerContainer}>
            <Image  source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx2RLCBrroNlcvN0Rk-1Upe2JG9X-MVldbLw&usqp=CAU"}} style={styles.img}/>
         <Text style={styles.title}>Observa lo que sientes y piensas</Text>           
          </View>

         {
            tasks.length > 0 && tasks.map(item => <SintomaCard item={item} key={item.id}/>)
         }  
        </ScrollView>
        
        
      </View>
      {open == true ? <SintomaForm setOpen={setOpen} saveSintoma={saveSintoma}/> : <MaterialIcons name="add-box" size={60} color="pink" style={styles.addButton} onPress={()=>setOpen(true)}/>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(255,255,255)"
    },
    headerContainer:{
      justifyContent: "center",
      alignItems: "center"
    },
    addButton: {
        position: "absolute",
        bottom: 10,
        right: 20,
        elevation: 10
    },
    img:{
      width: 200,
      height: 200
    },
    title: {
      fontSize: 25,
      color: "rgb(49, 198, 133)",
      fontWeight: "bold",
      textDirection: "center"
    }
})
export default Diario