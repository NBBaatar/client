import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import Feather from "react-native-vector-icons/Feather";
const FormPicker = (props) => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View>
      <Text style={styles.text}>{props.label}</Text>
      <View style={styles.viewStyle}>
        <Feather name={props.iconName} size={20} color="#36393e" />
        <Picker
          style={{ flex: 1, marginTop: -15 }}
          selectedValue={props.value}
          onValueChange={props.onValueChange}
        >
          {props.dataPicker.map((el, index) => (
            <Picker.Item
              label={el}
              key={index}
              value={props.values[index]}
              // selectedValue={selectedValue}
            ></Picker.Item>
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default FormPicker;

const styles = StyleSheet.create({});
