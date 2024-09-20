import  React, {useEffect, useState} from "react"
import { Image, StatusBar, TouchableHighlight } from "react-native";
import {View, Text, StyleSheet, ScrollView, Button, Dimensions} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { useSQLiteContext } from 'expo-sqlite/next';
import { constants } from "../utils/constans"
import Header from "../components/Header"
import { LinearGradient } from 'expo-linear-gradient';
import Card from "../components/Card";
import { getAllData } from "../services/blog";
const Home = ({navigation})=>{
    const [data, setData] = useState([])
    const goTo = (to)=> navigation.navigate(to)
    const db = useSQLiteContext();
    async function getData(){
        const response = await getAllData()
        setData(response)
    } 
    async function setup() {
        try {
            await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS sintomas (id INTEGER PRIMARY KEY NOT NULL, title TEXT, descripcion TEXT);
        `);  
        } catch (error) {
            console.log(error)
        }
      }

      useEffect(() => {
            setup();
            getData()            
    }, []);
    return(
        <View
        
        style={styles.container}
      >
        <ScrollView>
            <View style={styles.slider}>
            {/* 
                {
                    data.length > 0 && <Header data={data} goTo={navigation}/>
                }
                */}
                <Image source={{uri: "https://png.pngtree.com/png-clipart/20230430/original/pngtree-yoga-day-cartoon-meditation-png-image_9127494.png"}} style={styles.img}/>
            </View> 
            
            <Card goTo={goTo} title="Diario de Sintomas" name="Diario" icono="book"/>
            <View>
                <Text style={styles.title}>Explora tus sintomas</Text>
            </View>
            <View style={styles.optionContainer}>
                <TouchableHighlight onPress={()=> navigation.navigate("Sintomas", {categoria: "Mental", data:data.filter((i)=> i.categorie == "mental")} )} style={[styles.option, styles.principal]}><><MaterialCommunityIcons name="brain" size={50} color="black" /><Text>Mental</Text></></TouchableHighlight>
                <View>
                <TouchableHighlight style={[styles.option, styles.secundary]} onPress={()=> navigation.navigate("Sintomas", {categoria: "Fisicos", data:data.filter((i)=> i.categorie == "fisicos")} )}><><FontAwesome6 name="person" size={24} color="black" /><Text>Fisicos</Text></></TouchableHighlight>
                <TouchableHighlight style={[styles.option, styles.secundary]} onPress={()=> navigation.navigate("Sintomas", {categoria: "Sensaciones", data:data.filter((i)=> i.categorie == "sensaciones")})}><><AntDesign name="exclamationcircle" size={24} color="black" /><Text>Sensaciones</Text></></TouchableHighlight>
                </View>                
            </View>

        </ScrollView>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight: 20,
        justifyContent: "center",
        backgroundColor: "rgb(255,255,255)"
    },
    slider:{
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize:25,
        fontWeight: "bold",
        color:"rgb(150,150,255)",
        margin: 10
    },
    optionContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    option:{
        backgroundColor: "rgb(150,150,255)",
        padding: 10,
        borderRadius: 10,
        margin: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    principal:{
        width: 150,
        height: 200
    },
    secundary:{
        width: 150,
        height: 90
    },
    img: {
        width: 200,
        height: 200
    }
})
export default Home