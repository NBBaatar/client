import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Switch } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
const formSwitch = (props) => {
  return (
    <View>
      <View style={styles.viewStyle}>
        <Feather name={props.iconName} size={20} color="#36393e" />
        <Text style={styles.text}>{props.label}</Text>
        <Switch value={props.value} onValueChange={props.onValueChange} />
      </View>
    </View>
  );
};

export default formSwitch;

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    marginTop: 10,
    felx: 1,
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    color: "#36393e",
  },
});
