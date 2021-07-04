/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import Btn from "../Btn/index.js";

const currencyPerRupee = {
  Dollor: 0.014,
  Pounds: 0.0097,
  Euro: 0.011,
};

export default class CurrencyConverter extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      result: "0.0",
      Dollor: 0.014,
      Pounds: 0.0097,
      Euro: 0.011,
      sign: null,
    };
  }

  currency = (x) => {
    this.setState({ text: x });
  };
  convert = (currency) => {
    let result = parseFloat(
      this.state.text * currencyPerRupee[currency],
    ).toFixed(2);

    this.state.text === ""
      ? Alert.alert("Provide Data")
      : this.setState({ result: result, sign: currency });
  };
  render() {
    return (
      <View style={styles.container}>
     
        <Text style={styles.head}>CurrencyConverter</Text>
        <Text style={styles.result}>
          {[this.state.result, " ", this.state.sign]}
        </Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Indian Ruppe To Convert'
          onChangeText={this.currency}
        />
        
        <View style={styles.cbtn}>
          <Btn name='Dollor' onPress={() => this.convert("Dollor")} />
          <Btn name='Euro' onPress={() => this.convert("Euro")} />
          <Btn name='Pounds' onPress={() => this.convert("Pounds")} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    backgroundColor: "#6A1B4D",
    flex: 1,
  },
  safe: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  head: {
    fontSize: 40,
    textAlign: "center",
    color: "black",
    fontWeight: "900",
    backgroundColor: "yellow",
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
  },
  cbtn: {
    flexDirection: "row",
    justifyContent:'space-around',
  },
  result: {
    padding: 10,
    marginVertical: 10,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    color: "orange",
  },
  texts:{
    justifyContent:'center',
    
  }
});
