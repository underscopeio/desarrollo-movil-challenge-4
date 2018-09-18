import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tarjeta from "./src/Tarjeta";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tarjeta nombre="Pablo" apellido="Duchovny" margen={10}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ff0",
    alignItems: "center",
    justifyContent: "center"
  }
});
