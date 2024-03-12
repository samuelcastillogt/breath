import React, {useState} from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { AntDesign } from '@expo/vector-icons';
// const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};
const data = [
    {
        title: "Primer",
        image: 'https://legacy.reactjs.org/logo-og.png'
    },
    {
        title: "segundo",
        image: "https://c8.alamy.com/compes/d28rt5/abre-tu-mente-el-concepto-de-dibujo-de-tiza-en-la-pizarra-d28rt5.jpg"
    }, 
    {
        title: "tercero",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUYbl1fX8hznI_NfZiKZTmZLED6ne4QgntI91rHi9OrYALcgqqSoD2ygjCFX45Pd1vj6o&usqp=CAU"
    }
]
const Header = ()=>{
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
            
            <View style={[styles.container]}>
            <ImageBackground source={image = {uri: data[index].image}} resizeMode="cover" style={styles.image}>
                <Text style={styles.title}>{data[index].title}</Text>
             </ImageBackground>   
            </View>
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
        overflow: "hidden"
    }, 
    main:{
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "center"
    },
    title:{
        color: "white",
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: 10
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