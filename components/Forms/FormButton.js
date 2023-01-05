import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const FormButton = (props) => {
  return (
    <View>
      <Pressable style={styles.button} onPress={props.onPress}>
        <Text style={styles.text_button}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  text_button: {
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 0.5,
    color: "white",
    // paddingVertical: 5,
    // paddingHorizontal: 50,
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 112,
    backgroundColor: "#2e2c2b",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
