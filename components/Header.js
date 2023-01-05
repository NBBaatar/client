import React from "react";
import { Text, View } from "react-native";

const Header = ({ name }) => {
  return (
    <View>
      <Text>{{ name }}</Text>
    </View>
  );
};

export default Header;
