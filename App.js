import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Tarjeta from "./src/Tarjeta";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tarjeta nombre="Nicolas" apellido="Bergues" agregarMargen />
        <Tarjeta nombre="Nicolas" apellido="Bergues" agregarMargen={false} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
