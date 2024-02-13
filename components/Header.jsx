import React from "react";
import { View, Text, StyleSheet } from "react-native";
const Header = ()=>{
    return(
            <View style={styles.container}>
                <Text>HEader</Text>
            </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(237, 232, 232)",
        margin: 20,
        height: 100,
        borderRadius: 20,
        padding: 20,
        shadowColor: 'black',
        shadowOffset: {
            width: 20,
            height: -50,
          },
        shadowOpacity: 0.1,
        shadowRadius: 1,
    }
})
export default Header