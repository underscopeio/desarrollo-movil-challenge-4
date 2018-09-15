import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tarjeta from './src/Tarjeta'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tarjeta nombre="Gonzalo" apellido="Aguirre" style={styles.tarjeta} />
        <Tarjeta nombre="Juan" apellido="Gonzalez" style={styles.tarjeta}/>
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
    //flexDirection: 'column',
  },

  tarjeta: {
    // este style se lo paso al hijo
    margin: 10,
  }

})
