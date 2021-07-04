/* eslint-disable eqeqeq */
/* eslint-disable prettier/prettier */ /* eslint-disable quotes */
/* eslint-disable no-unused-vars */

/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Alert } from "react-native";
import PlayGame from "../../assets/Btn/PlayGame.js";
export default class Dice extends Component {
  constructor(props) {
    super();
    this.state = {
      path1: require("../images/dice1.png"),
      path2: require("../images/dice1.png"),
      rn: null,
    };
  }

  play = () => {
    var rn = Math.floor(Math.random() * 6 + 1);

    if (rn == 1) {
      this.setState({ path1: require("../images/dice1.png") });
    } else if (rn == 2) {
      this.setState({ path1: require("../images/dice2.png") });
    } else if (rn == 3) {
      this.setState({ path1: require("../images/dice3.png") });
    } else if (rn == 4) {
      this.setState({ path1: require("../images/dice4.png") });
    } else if (rn == 5) {
      this.setState({ path1: require("../images/dice5.png") });
    } else if (rn == 6) {
      this.setState({ path1: require("../images/dice6.png") });
    }
    var rn2 = Math.floor(Math.random() * 6 + 1);
    if (rn2 == 1) {
      this.setState({ path2: require("../images/dice1.png") });
    } else if (rn2 == 2) {
      this.setState({ path2: require("../images/dice2.png") });
    } else if (rn2 == 3) {
      this.setState({ path2: require("../images/dice3.png") });
    } else if (rn2 == 4) {
      this.setState({ path2: require("../images/dice4.png") });
    } else if (rn2 == 5) {
      this.setState({ path2: require("../images/dice5.png") });
    } else if (rn2 == 6) {
      this.setState({ path2: require("../images/dice6.png") });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dices}>
          <Image source={this.state.path1} style={styles.image} />
          <Image source={this.state.path2} style={styles.image} />
        </View>
        <PlayGame name='Roll Dice' onPress={this.play} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6A1B4D",
  },
  dices: {
    justifyContent: "space-around",
    alignItems: "center",
  },
});
