/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Btn from '../Btn/index';

export default class RandomColorGenerator extends React.Component {
  constructor(props) {
    super();
    this.state = {
      randColor: "black",
    };
  }
  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  btnPressed = () => {
    this.setState({ randColor: this.getRandomColor() });
    // console.log("Rand= ",this.state.randColor);
  };

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.randColor }]}>
        <Text style={styles.text}> Hello Nikhil, Welcome To React Native </Text>
        <Btn name="Hit Mee" onPress={this.btnPressed} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "#DDD101",
    backgroundColor: "black",
  },
});
