import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Tarjeta from './src/Tarjeta'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tarjeta bienvenido="Bienvenido" nombre="Mario" apellido="Fernandez" style={styles.margenes}/>        
        <Tarjeta bienvenido="Bienvenido" nombre="Mario2" apellido="Fernandez2"  />
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
  margenes: {
    marginBottom:20
  }
})
