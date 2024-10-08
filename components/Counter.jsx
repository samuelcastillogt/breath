import React, {useEffect, useState} from 'react'
import {Text, View, StyleSheet} from "react-native"
function Counter() {
    const [count, setCount] = useState(5);
    useEffect(()=>{
    setInterval(()=>{
        if(count != 0){
            setCount(count-1)
        }

    },1000)
    },[count])
    return (
    <View style={[styles.container, styles.button]}>
        <Text>{count}</Text>
            <Text>Espera</Text>
    </View>

  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange"
    },
    button:{
        shadowColor: 'rgba(0,0,0,0.3)',
        shadowOpacity:0.5,
        alignItems:'center',
        justifyContent:'center',
        zIndex: 0,
        width:55,
        height:55,
        borderRadius:55,
      },

})
export default Counter