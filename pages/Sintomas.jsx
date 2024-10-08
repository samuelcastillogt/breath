import React, {useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableHighlight } from "react-native";

import { constants } from "../utils/constans";
const Sintomas = ({navigation, route})=>{
    const [post, setPost] = useState(null)
    const {categoria, data} = route.params
    return(
        <ScrollView >
            <View style={{alignItems: "center"}}>
           {
            post == null && data.map(item => <TouchableHighlight style={styles.option} key={item.title} onPress={()=> navigation.navigate("Comprende", {content: item.content})}>
            <Text 
                style={styles.optionTitle}
            > {item.title}
            </Text>  
            </TouchableHighlight>)
          }               
            </View>

</ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    option: {
        padding: 10,
        height: 50,
        backgroundColor: constants.verde,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
        width: 300
      },
      optionTitle: {
        fontSize: 25,
        color: "white",
        fontWeight: "bold"
      }
})
const HTMLstyles = StyleSheet.create({
    div:{
        fontSize: 25
    },
    p:{
        fontSize: 25
    }
})
export default Sintomas