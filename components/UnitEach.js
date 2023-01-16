import { StyleSheet, Text, View } from "react-native";
import React from "react";

const UnitEach = (props) => {
  const check = props.data;

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
          marginHorizontal: 10,
          fontSize: 12,
          fontWeight: "200",
          fontStyle: "italic",
          textAlign: "center",
        }}
      >
        Level: {props.data.units?.[0].unitFloor}
      </Text>
      <Text
        style={{
          marginHorizontal: 18,
          fontSize: 24,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        {props.data.units?.[0].unitNumber}
      </Text>
    </View>
  );
};

export default UnitEach;

const styles = StyleSheet.create({});
