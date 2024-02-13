import  React from "react"
import {View, Text, StyleSheet, ScrollView} from "react-native"
import { constants } from "../utils/constans"
import Header from "../components/Header"
import { LinearGradient } from 'expo-linear-gradient';
import Card from "../components/Card";
const Home = ()=>{
    return(
        <LinearGradient
        colors={[constants.verde, "rgba(9, 92, 55, 0.7)", 'rgb(8, 59, 36)']}
        style={styles.container}
      >
        <ScrollView>
            <View>
                <Header />
            </View>
            <Card />
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card /> 
            <Card />             
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