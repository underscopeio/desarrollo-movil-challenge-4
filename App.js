import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tarjeta from './src/Tarjeta'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tarjeta nombre="Homero" apellido="Simpson" style = {styles.margen10} />
        <Tarjeta nombre="Marge" apellido="Simpson" style = {styles.margen10} />
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
  margen10: {
    padding: 10,
    margin: 10,
  }
})
