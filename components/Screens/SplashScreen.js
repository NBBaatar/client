import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActivityIndicator size={large} />
      <Text style={{ justifyContent: "center", alignContent: "center" }}>
        Loading Please wait...
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
