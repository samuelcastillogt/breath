import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
function FinishedLesson() {
  return (
    <View> 
    <Image style={styles.img} source={{uri:"https://www.gifss.com/fuego/artificiales/images/fuegos-artificiales-05.gif"}} />
    <Text style={{ fontWeight: '700', fontSize: 18, color: 'gray' }}>Haz terminado la leccion</Text>    
    </View>

  )
}
const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200
    }
})
export default FinishedLesson