import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BuildingEach = (props) => {
  return (
    <View
      style={{
        width: 75,
        height: 75,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginHorizontal: 18,
          fontSize: 24,
          fontWeight: "700",
        }}
      >
        {props.data.buildingNumber}
      </Text>
    </View>
  );
};

export default BuildingEach;

const styles = StyleSheet.create({});
