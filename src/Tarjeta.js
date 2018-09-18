import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Card extends Component {
  state = {
    soloNombre: false
  };

  handlePress = () => {
    this.setState({ soloNombre: !this.state.soloNombre });
  };

  render() {
    const { nombre, apellido, margen } = this.props;
    const { soloNombre } = this.state;

    const texto = soloNombre ? nombre : `${nombre} ${apellido}`;

    return (
      [<View style={[styles.container, styles.conSombra, {margin:margen}]}>
        <Text
          style={[styles.texto, !this.state.soloNombre && styles.textoChico]}
        >
          {texto}
        </Text>
        <Button
          title={soloNombre ? "Mostrar nombre completo" : "Mostrar sólo nombre"}
          onPress={this.handlePress}
        />
      </View>,
      <View style={[styles.container, styles.conSombra, {margin:50}]}>
        <Text
          style={[styles.texto]}
        >
          Eulalio
        </Text>
        
      </View>]


    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: "#F5FCFF",
    justifyContent: "space-between"
  },

  texto: {
    textAlign: "center",
    fontSize: 48,
    fontWeight: "bold"
  },
  conSombra: {
    shadowColor: "black",
    shadowOffset: {
      height: 1,
      width: 1
    },
    shadowRadius: 1.5,
    shadowOpacity: 0.5,
    elevation: 2,
    padding: 10
  },

  textoChico: {
    fontSize: 24
  }
});
