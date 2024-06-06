import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import HTMLView from 'react-native-htmlview'
import { ScrollView } from 'react-native'
export default function HtmlRender({route, navigation}) {
const {content} = route.params
  return (
    <ScrollView style={{padding: 10}}>
    <HTMLView
    value={content}
    stylesheet={styles}
  />
    </ScrollView>

  )
}

const styles = StyleSheet.create({
    div:{
        fontSize: 25
    },
    p:{
        fontSize: 25
    },
    img:{
        width: 100
    },
    li:{
        fontSize: 25 
    }
})