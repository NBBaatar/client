import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Switch } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
const formSwitch = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.label}</Text>

      <View style={styles.viewStyle}>
        <Feather name={props.iconName} size={20} color="#36393e" />
        <Switch
          style={{
            paddingLeft: 10,
            flex: 1,
            marginTop: Platform.OS === "ios" ? 0 : -3,
          }}
        />
      </View>
    </View>
  );
};

export default formSwitch;

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomColor: "black",
    // borderBottomWidth: 1,
    paddingBottom: 10,
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
  },
  text: {
    fontSize: 16,
    paddingTop: 35,
    color: "#36393e",
  },
});
