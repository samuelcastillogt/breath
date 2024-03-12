import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableHighlight } from "react-native";
import { AntDesign } from '@expo/vector-icons';
const Header = (props)=>{
    const {data, goTo} = props
    const [index, setIndex] = useState(0)

    const next = ()=>{
        if(index == data.length -1){
            setIndex(0)
        }else{
            const newIndex = index + 1
            setIndex(newIndex)
        }
    }
    const back = ()=>{
        if(index == 0){
            setIndex(data.length -1)
        }else{
            setIndex(index -1)
        }
    }
    return(
        <View style={styles.main}>
            <AntDesign name="stepbackward" size={24} color="white" onPress={back}/>
            <TouchableHighlight onPress={()=> goTo.navigate("Post", {uri: data[index].url})} style={[styles.container]}>
                <Text style={styles.title}>{data[index].title}</Text>
            </TouchableHighlight>
            <AntDesign name="stepforward" size={24} color="white" onPress={next}/>
        </View>
            
        
    )
}
const styles = StyleSheet.create({
    container: {
        height: 150,
        borderRadius: 20,
        width: "80%",
        padding: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 10,
            height: -5,
          },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        overflow: "hidden",
        backgroundColor: "#818FB4",
        justifyContent: "center",
        alignItems: "flex-end"
    }, 
    main:{
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    title:{
        color: "white",
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 50,
        alignItems: "flex-end",
        padding: 10
      }
})
export default Header