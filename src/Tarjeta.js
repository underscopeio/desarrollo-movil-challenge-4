import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'

const dimensions = Dimensions.get('window')
const altura = dimensions.height
const ancho = dimensions.width

export default class Card extends Component {
  state = {
    soloNombre: false,
  }

  handlePress = () => {
    this.setState({ soloNombre: !this.state.soloNombre })
  }

  render() {
    const { nombre, apellido } = this.props
    const { soloNombre } = this.state

    const texto = soloNombre ? nombre : `${nombre} ${apellido}`
    const tieneSombra = true;

    return (
      <View style={[styles.container, tieneSombra && styles.conSombra, this.props.style]}>
        <Text style={soloNombre  ? [styles.texto, styles.textoChico ]: styles.texto}>{texto}</Text>
        <Button title={soloNombre ? 'Mostrar nombre completo' : 'Mostrar sólo nombre'} onPress={this.handlePress} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: '#F5FCFF',
    justifyContent: 'space-between',
  },

  texto: {
    textAlign: 'center',
    fontSize: 48,
    fontWeight: 'bold',
  },
  conSombra:{
    shadowColor: 'black',
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowRadius: 1.5,
    shadowOpacity: 0.5,
    elevation: 2,
    padding: 10,
  },
  textoChico: {
    fontSize: 60,
    shadowColor: 'blue',
    color:'green'
  }

})
