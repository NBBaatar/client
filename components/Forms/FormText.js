import { Platform, StyleSheet, TextInput, Text, View } from "react-native";
import React from "react";
import Feather from "react-native-vector-icons/Feather";
const formText = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.label}</Text>
      <View style={styles.viewStyle}>
        <Feather name={props.iconName} size={20} color="#36393e" />
        <TextInput
          {...props}
          style={styles.textInput}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

export default formText;

const styles = StyleSheet.create({
  textInput: {
    paddingLeft: 10,
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -3,
  },
  viewStyle: {
    flexDirection: "row",
    marginTop: 10,

    borderBottomColor: "black",
    borderBottomWidth: 1,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    paddingTop: 35,
    color: "#36393e",
  },
});
