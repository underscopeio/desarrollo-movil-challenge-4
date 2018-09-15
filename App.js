import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tarjeta from './src/Tarjeta'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tarjeta nombre="Gonzalo" apellido="Aguirre" style={styles.tarjeta} />
        <Tarjeta nombre="Gonzalo" apellido="Aguirre" style={styles.tarjeta} />
        <Tarjeta nombre="Gonzalo" apellido="Aguirre" style={styles.tarjeta} />
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
  tarjeta: {
    width: 300,
    height: 200,
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
    marginBottom: 20  
  }
})
