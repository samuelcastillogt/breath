import  React from "react"
import {View, Text, StyleSheet, ScrollView, Button} from "react-native"
import { constants } from "../utils/constans"
import Header from "../components/Header"
import { LinearGradient } from 'expo-linear-gradient';
import Card from "../components/Card";
const Home = ({navigation})=>{
    const goTo = (to)=> navigation.navigate(to)
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