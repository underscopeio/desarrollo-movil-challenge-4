import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tarjeta from './src/Tarjeta'

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Tarjeta nombre="Gonzalo" apellido="Aguirre" />
          <Tarjeta nombre="Gonzalo" apellido="Aguirre" cardMargin={styles.margenCard}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    margenCard: {
      margin: 10,
    },

})
