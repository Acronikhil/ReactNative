import { Button } from "native-base";
import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome5";
import Btn from "../Btn/PlayGame.js";
var arr = new Array(9).fill("empty");

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCross: true,
      win: "Game",
    };
  }

  // draw item
  drawItem = (itemNumber) => {
    if (arr[itemNumber] === "empty") {
      arr[itemNumber] = this.state.isCross;
      this.setState({ isCross: !arr[itemNumber] });
    }
    this.wingame();
  };

  // set Icon
  changeIcon = (itemNumber) => {
    if (arr[itemNumber] !== "empty") {
      return arr[itemNumber] ? "times" : "circle";
    }
    return "pencil-alt";
  };

  // set item color
  setColor = (itemNumber) => {
    if (arr[itemNumber] !== "empty") {
      return arr[itemNumber] ? "red" : "green";
    }
    return "#6A1B4D";
  };

  // reset Game
  resets = () => {
    arr.fill("empty");
    this.setState({ win: "Game" });
    this.forceUpdate();
  };
  reset = () => {
    arr.fill("empty");
    // setTimeout(this.resets, 3000);
    // this.setState({ win: "Game" });
    this.forceUpdate();
  };

  // win game
  wingame = () => {
    if (arr[0] !== "empty" && arr[0] == arr[1] && arr[1] === arr[2]) {
      this.setState({ win: (arr[0] ? "Cross" : "Circle").concat(" Wins") });
      setTimeout(this.reset, 2000);
    } //first ROW
    else if (arr[3] !== "empty" && arr[3] == arr[4] && arr[4] === arr[5]) {
      this.setState({ win: (arr[3] ? "Cross" : "Circle").concat(" Wins") });
      setTimeout(this.reset, 2000);
    } //Second ROW
    else if (arr[6] !== "empty" && arr[6] == arr[7] && arr[7] === arr[8]) {
      this.setState({ win: (arr[6] ? "Cross" : "Circle").concat(" Wins") });
      setTimeout(this.reset, 2000);
    } //Third ROW
    else if (arr[0] !== "empty" && arr[0] == arr[3] && arr[3] === arr[6]) {
      this.setState({ win: (arr[0] ? "Cross" : "Circle").concat(" Wins") });
      setTimeout(this.reset, 2000);
    } //first Column
    else if (arr[1] !== "empty" && arr[1] == arr[4] && arr[4] === arr[7]) {
      this.setState({ win: (arr[1] ? "Cross" : "Circle").concat(" Wins") });
      setTimeout(this.reset, 2000);
    } //Second Column
    else if (arr[2] !== "empty" && arr[2] == arr[5] && arr[5] === arr[8]) {
      this.setState({ win: (arr[2] ? "Cross" : "Circle").concat(" Wins") });
      setTimeout(this.reset, 2000);
    } //Third Column
    else if (arr[2] !== "empty" && arr[2] == arr[4] && arr[4] === arr[6]) {
      this.setState({ win: (arr[2] ? "Cross" : "Circle").concat(" Wins") });
      setTimeout(this.reset, 2000);
    } //Diagonal Right
    else if (arr[0] !== "empty" && arr[0] == arr[4] && arr[4] === arr[8]) {
      this.setState({ win: (arr[0] ? "Cross" : "Circle").concat(" Wins") });
      setTimeout(this.reset, 2000);
    } //Diagonal Left

    // TIE
    else if (
      arr[0] !== "empty" &&
      arr[1] !== "empty" &&
      arr[2] !== "empty" &&
      arr[3] !== "empty" &&
      arr[4] !== "empty" &&
      arr[5] !== "empty" &&
      arr[6] !== "empty" &&
      arr[7] !== "empty" &&
      arr[8] !== "empty"
    ) {
      this.setState({ win: "It's Tie" });
    } else {
      this.setState({ win: "Game" });
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tictac}>
          <Text style={styles.message}>{this.state.win}</Text>
          <View style={styles.lineContainer}>
            <View style={styles.lines}>
              <View style={styles.items}>
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => {
                    this.drawItem(0);
                  }}>
                  <Icon
                    name={this.changeIcon(0)}
                    size={50}
                    color={this.setColor(0)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(1);
                  }}>
                  <Icon
                    name={this.changeIcon(1)}
                    size={50}
                    color={this.setColor(1)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(2);
                  }}>
                  <Icon
                    name={this.changeIcon(2)}
                    size={50}
                    color={this.setColor(2)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.lines}>
              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(3);
                  }}>
                  <Icon
                    name={this.changeIcon(3)}
                    size={50}
                    color={this.setColor(3)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(4);
                  }}>
                  <Icon
                    name={this.changeIcon(4)}
                    size={50}
                    color={this.setColor(4)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(5);
                  }}>
                  <Icon
                    name={this.changeIcon(5)}
                    size={50}
                    color={this.setColor(5)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.lines}>
              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(6);
                  }}>
                  <Icon
                    name={this.changeIcon(6)}
                    size={50}
                    color={this.setColor(6)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(7);
                  }}>
                  <Icon
                    name={this.changeIcon(7)}
                    size={50}
                    color={this.setColor(7)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.items}>
                <TouchableOpacity
                  onPress={() => {
                    this.drawItem(8);
                  }}>
                  <Icon
                    name={this.changeIcon(8)}
                    size={50}
                    color={this.setColor(8)}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Btn name='Reset Game' onPress={() => this.reset()} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#242B2E",
  },
  tictac: {
    flex: 1,
    padding: 50,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  lineContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  lines: {
    padding: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  items: {
    borderRadius: 2,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    margin: 2,
    flex: 1,
    backgroundColor: "white",
  },

  icons: {
    padding: 25,
    margin: 0,
  },
  message: {
    fontSize: 50,
    color: "#D9D55B",
    borderRadius: 25,
    borderColor: "#D9D55B",
    borderWidth: 1,
    padding: 20,
  },
});
