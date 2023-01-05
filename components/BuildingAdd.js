import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { serverClient } from "../Constant";
import FormPicker from "./Forms/FormPicker";
const BuildingAdd = (props) => {
  const [buildingNumber, setBuildingNumber] = useState();
  const [project, setProject] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const ProjectSlice = Object.values(selectedValue);
  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/projects`)
      .then((response) => {
        setProject(response.data.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const saveHandle = (value, navigation, props) => {
    axios
      .post(`${serverClient}/api/v1/buildings`, {
        project: ProjectSlice,
        buildingNumber: buildingNumber,
        statusOf: [
          {
            complate: false,
          },
        ],
      })
      .then((response) => {
        Alert.alert("Data saved!"), console.log(response);
      })
      .catch((err) => {
        Alert.alert(err);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Animatable.View animation="fadeInUpBig">
        <Text style={styles.textHeader}>CREATE NEW BUILDING</Text>

        <ScrollView>
          <View
            style={{
              flex: 16,
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}
          >
            <Text
              style={{ textAlign: "center", fontSize: 20, fontWeight: "300" }}
            >
              Please select your Project:
            </Text>
            <FormPicker
              IconButton="layer"
              dataPicker={project.map((el) => el.name)}
              values={project.map((el) => el._id)}
              value={selectedValue.project}
              onValueChange={(value, index) => {
                console.log(value);
                setSelectedValue({ ...selectedValue, project: value });
              }}
            />
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Please enter Building number: "
              value={buildingNumber}
              onChangeText={(value) => setBuildingNumber(value)}
            />

            <View>
              <Pressable style={styles.button} onPress={saveHandle}>
                <Text style={styles.text_button}>Save</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default BuildingAdd;

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
    marginVertical: 50,
    // justifyContent: "center",
    // alignItems: "center",
    textAlign: "center",
    // flex: 1,
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
