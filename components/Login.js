import axios from "axios";
import React, { useState, useContext } from "react";

import {
  StyleSheet,
  Text,
  ActivityIndicator,
  View,
  Image,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import UserContext from "../Contexts/UserContext";

const loginScreen = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);

  //UserContext
  const state = useContext(UserContext);
  async function login() {
    setSpinner(true);
    if (email.lenght === 0) {
      Alert.alert("Enter your Email.");
      return;
    }
    if (password.lenght === 0) {
      Alert.alert("Enter your password.");
      return;
    }
    state.login(email, password);
    props.navigation.navigate("Home");
    if (state.error) {
      setSpinner(false);
      console.log("error at: ", state.error);
      setEmail(null);
      setPassword(null);
    }
  }
  return (
    <View
      style={{
        backgroundColor: "#3c3d3c",
        flex: 1,
      }}
    >
      {spinner ? (
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <ActivityIndicator size="large" color="#ff4e47" />
        </View>
      ) : (
        <>
          <View style={styles.imgContainer}>
            <Image
              style={styles.image}
              source={require("../images/logo.jpg")}
            />
          </View>

          <Text style={styles.text_header}></Text>

          <TextInput
            {...props}
            style={styles.textInput}
            autoCapitalize="none"
            placeholder="Email: "
            placeholderTextColor="white"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            style={styles.textInput}
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder="Password: "
            placeholderTextColor="white"
            value={password}
            onChangeText={(value) => setPassword(value)}
          />

          <Pressable style={styles.button} onPress={login}>
            <Text style={styles.text_button}>Login</Text>
          </Pressable>
        </>
      )}
    </View>
  );
};

export default loginScreen;
const styles = StyleSheet.create({
  // container: {},
  imgContainer: {
    flexDirection: "row",
    marginVertical: 40,
    marginHorizontal: 5,
  },
  image: {
    resizeMode: "contain",
    flex: 1,
    aspectRatio: 5, // Your aspect ratio
    borderRadius: 20,
    marginLeft: "auto",
    marginRight: "auto",
    alignSelf: "center",
    marginTop: "6%",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  text_button: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
  text_header: {
    textAlign: "center",
    marginBottom: "5%",
    fontSize: 18,
    marginTop: 25,
  },
  textInput: {
    borderBottomColor: "white",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    fontSize: 20,
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    color: "white",
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
    width: 150,
    backgroundColor: "#2e2c2b",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
