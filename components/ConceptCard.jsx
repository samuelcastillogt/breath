import React, { useEffect, useState } from "react";
import {View, Text, StyleSheet, ScrollView, TouchableHighlight, Image} from "react-native"
import Target from "./Target";
import { constants } from "../utils/constans";
import { getAllCards } from "../services/dataApp.service";
const ConceptCard = ({navigation})=>{
    const [cards, setCards]= useState([])
    const [card, setCard] = useState([])
    const resetNav = ()=> setCard([])
    const getCards = async()=>{
        const response = await getAllCards()
        setCards(response)
    }
    useEffect(()=>{
        getCards()
    },[])
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            resetNav()
        });
        return unsubscribe;
     }, [navigation]);
    return(
        <View style={styles.container}>


            {
                card.length >0 && <Target data={card} exit={setCard}/> ||             <>
                <View style={{alignItems: "center"}}>
                 <Image style={styles.img} source={{uri: "https://static.vecteezy.com/system/resources/thumbnails/018/982/656/small/positive-thinking-concept-businessman-put-positive-thinking-on-big-head-symbolic-creative-strategy-for-success-enjoy-feeling-and-dream-control-strategy-png.png"}} />
                <Text style={styles.title}>Aprende a aceptar</Text>                       
                </View>
     
               <ScrollView>
                {
                    cards && cards.length > 0 && cards.map((item, index)=> (
                        <TouchableHighlight style={styles.option} onPress={()=> setCard(item.data.data)} key={item.id}>
                    <Text 
                        style={styles.optionTitle}
                    > {item.data.title}
                    </Text>  
                    </TouchableHighlight>
                    ))
                }
                </ScrollView>
               </>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10
    },
    title:{
        fontSize: 30,
        color: constants.verde,
        fontWeight: "bold"
    },
    img:{
        width: 200,
        height: 200
    },
    option: {
        padding: 10,
        backgroundColor: constants.verde,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        margin: 10,
        width: 300
      },
      optionTitle: {
        fontSize: 25,
        textAlign: "center",
        color: "white",
        fontWeight: "bold"
      },
})
export default ConceptCard