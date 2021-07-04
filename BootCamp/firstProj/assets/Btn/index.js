/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

export default class Btn extends Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Text style={styles.text}> {this.props.name} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    borderRadius:5,
    fontSize:25,
    paddingVertical:5,
    paddingHorizontal: 15,
    backgroundColor: "orange",
    marginTop:10
  },
});
