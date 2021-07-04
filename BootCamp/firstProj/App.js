/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
// import RandomColorGenerator from "./assets/RandomColorGenerator/index.js";
// import Dice from "./assets/DiceGame/Dice.js";
// import CurrencyConverter from "./assets/CurrencyConverter/index.js";
// import ButtonExample from "./assets/nativebase/index.js"
import TicTacToe from "./assets/TicTacToe/index.js";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <RandomColorGenerator/> */}
        {/* <Dice /> */}
        {/* <CurrencyConverter /> */}
        {/* <ButtonExample/> */}
        <TicTacToe />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
