import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { serverClient } from "../Constant";
export default function ProjectAdd(props) {
  const [name, setName] = useState();
  const [location, setLocation] = useState();

  const saveHandle = (value, navigation) => {
    axios
      .post(`${serverClient}/api/v1/projects`, {
        name: name,
        location: location,
      })
      .then(
        (result) => alert("Saved"),
        setName(null),
        setLocation(null),
        props.navigation.navigate("Home")
      )
      .catch((err) => alert(err));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animatable.View animation="fadeInUpBig" style={styles.center}>
        <Text style={styles.textHeader}>CREATE NEW PROJECT</Text>

        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Project name: "
          value={name}
          onChangeText={(value) => setName(value)}
        />

        <TextInput
          style={styles.textInput}
          // secureTextEntry={true}
          autoCapitalize="none"
          placeholder="Project location: "
          // placeholderTextColor="white"
          value={location}
          onChangeText={(value) => setLocation(value)}
        />
        <View>
          <Pressable style={styles.button} onPress={saveHandle}>
            <Text style={styles.text_button}>Save</Text>
          </Pressable>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    // textAlign: "left",
    flexDirection: "column",
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    // marginBottom: 25,
    //flex: 1,
  },

  textInput: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    color: "grey",
    // textAlignVertical: "top",
  },
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
    width: 95,
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
