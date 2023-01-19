import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { RadioButton, Text as RadioText } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
const FormRadioButton = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.label}</Text>
      <View style={styles.viewStyle}>
        <Feather name={props.iconName} size={20} color="#36393e" />
        <RadioButton.Group
          onValueChange={props.onValueChange}
          value={props.value}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={styles.radioView}>
              <RadioText style={styles.radioText}>Yes: </RadioText>
              <RadioButton value={true}></RadioButton>
            </View>
            <View style={styles.radioView}>
              <RadioText style={styles.radioText}>No: </RadioText>
              <RadioButton value={false}></RadioButton>
            </View>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default FormRadioButton;

const styles = StyleSheet.create({
  viewStyle: {
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  text: {
    marginTop: 20,
    fontSize: 16,
    color: "#36393e",
  },
  radioText: {
    flexDirection: "column",
    marginTop: 10,
    fontSize: 20,
    color: "#ffffff",
  },
  radioView: {
    height: 60,
    width: 170,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#2e2c2b",
  },
});
