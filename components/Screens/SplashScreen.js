import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <ActivityIndicator size="large" color="#3A4F7A" />
      <Text
        style={{
          textAlign: "center",
          fontSize: "20",
          fontWeight: "200",
          marginTop: 10,
        }}
      >
        Loading Please wait...
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
