import  React, {useEffect} from "react"
import {View, Text, StyleSheet, ScrollView, Button} from "react-native"
import { useSQLiteContext } from 'expo-sqlite/next';
import { constants } from "../utils/constans"
import Header from "../components/Header"
import { LinearGradient } from 'expo-linear-gradient';
import Card from "../components/Card";
const Home = ({navigation})=>{
    const goTo = (to)=> navigation.navigate(to)
    const db = useSQLiteContext();
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
    }, []);
    return(
        <LinearGradient
        colors={[constants.verde, "rgba(9, 92, 55, 0.7)", 'rgb(8, 59, 36)']}
        style={styles.container}
      >
        <ScrollView>
            <View>
                <Header />
            </View>
            <Card goTo={goTo} title="Diario de Sintomas" name="Diario"/>
            <Card goTo={goTo} title="Ejercicios de Relajacion" name="Respiracion"/>
            <Card goTo={goTo} title="Aprende a aceptar" name="Aceptar"/>           
        </ScrollView>

        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})
export default Home