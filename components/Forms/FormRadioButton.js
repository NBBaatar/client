import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RadioButton, Text as RadioText } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
const FormRadioButton = (props) => {
  return (
    <View>
      <Text style={styles.text}>{props.label}</Text>
      <View style={styles.viewStyle}>
        <Feather name={props.iconName} size={20} color="#36393e" />
        <RadioButton.Group
          onValueChange={props.onValueChange}
          value={props.value}
        >
          <View>
            <RadioText>Firs</RadioText>
            <RadioButton value="Test"></RadioButton>
          </View>
          <View>
            <RadioText>Second</RadioText>
            <RadioButton value="Test1"></RadioButton>
          </View>
        </RadioButton.Group>
      </View>
    </View>
  );
};

export default FormRadioButton;

const styles = StyleSheet.create({});
