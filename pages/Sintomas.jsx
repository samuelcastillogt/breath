import React from "react";
import { View, Text } from "react-native";

const Sintomas = ({navigation, route})=>{
    const categoria = route.params.categoria
    return(
        <View>
            <Text>{categoria}</Text>
        </View>
    )
}
export default Sintomas