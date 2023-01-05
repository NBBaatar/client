import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import FormText from "./Forms/FormText";
import FormButton from "./Forms/FormButton";
import axios from "axios";
import FormPicker from "./Forms/FormPicker";
// import FormRadioButton from "./Forms/FormRadioButton";
import { serverClient } from "../Constant";
const UnitAdd = (props) => {
  const [unitFloor, setUnitFloor] = useState();
  const [unitNumber, setUnitNumber] = useState();
  const [building, setBuilding] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/buildings`)
      .then((response) => {
        setBuilding(response.data.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const handleSave = () => {
    const noValue = "No value";
    const noPhoto = "no-photo.jpg";
    const statusOf = false;
    axios
      .post(`${serverClient}/api/v1/units`, {
        units: [
          {
            unitFloor: unitFloor,
            unitNumber: unitNumber,
            waterProof: [
              {
                before: [
                  {
                    balcony: [
                      {
                        level: noValue,
                        angle: noValue,
                        concrate: noValue,
                        patch: noValue,
                        subStraight: noValue,
                        photo: [{ fileName: noPhoto, uri: noValue }],
                      },
                    ],
                    bathroom: [
                      {
                        level: noValue,
                        angle: noValue,
                        concrate: noValue,
                        patch: noValue,
                        subStraight: noValue,
                        photo: [{ fileName: noPhoto, uri: noValue }],
                      },
                    ],
                    landry: [
                      {
                        level: noValue,
                        angle: noValue,
                        concrate: noValue,
                        patch: noValue,
                        subStraight: noValue,
                        photo: [{ fileName: noPhoto, uri: noValue }],
                      },
                    ],
                    ensuit: [
                      {
                        level: noValue,
                        angle: noValue,
                        concrate: noValue,
                        patch: noValue,
                        subStraight: noValue,
                        photo: [{ fileName: noPhoto, uri: noValue }],
                      },
                    ],
                  },
                ],
                after: [
                  {
                    balcony: [
                      {
                        level: noValue,
                        angle: noValue,
                        concrate: noValue,
                        patch: noValue,
                        subStraight: noValue,
                        photo: [{ fileName: noPhoto, uri: noValue }],
                      },
                    ],
                    bathroom: [
                      {
                        level: noValue,
                        angle: noValue,
                        concrate: noValue,
                        patch: noValue,
                        subStraight: noValue,
                        photo: [{ fileName: noPhoto, uri: noValue }],
                      },
                    ],
                    landry: [
                      {
                        level: noValue,
                        angle: noValue,
                        concrate: noValue,
                        patch: noValue,
                        subStraight: noValue,
                        photo: [{ fileName: noPhoto, uri: noValue }],
                      },
                    ],
                    ensuit: [
                      {
                        level: noValue,
                        angle: noValue,
                        concrate: noValue,
                        patch: noValue,
                        subStraight: noValue,
                        photo: [{ fileName: noPhoto, uri: noValue }],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        statusOf: [
          {
            complate: statusOf,
          },
        ],
        building: buildingSlice,
      })
      .then((response) => {
        alert("Data Saved");
      })
      .catch((err) => console.log(err));
  };
  const buildingSlice = Object.values(selectedValue);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>ENTER YOUR UNIT DETAILS</Text>
      </View>
      <View style={styles.view2}>
        <ScrollView>
          {/* <FormRadioButton /> */}
          <FormPicker
            label="Select your Building Number: "
            IconButton="layer"
            dataPicker={building.map((el) => el.buildingNumber)}
            values={building.map((el) => el._id)}
            value={selectedValue.building}
            onValueChange={(value, index) => {
              console.log(value);
              setSelectedValue({ ...selectedValue, building: value });
            }}
          />
          {console.log(buildingSlice)}
          <FormText
            label="Enter unit's Floor: "
            placeholder="Please enter floor number"
            iconName="hash"
            value={unitFloor}
            onChangeText={(value) => setUnitFloor(value)}
          />
          <FormText
            label="Enter unit's Number:"
            placeholder="Please enter unit's number"
            iconName="bar-chart"
            value={unitNumber}
            onChangeText={(value) => setUnitNumber(value)}
          />
          <FormButton onPress={handleSave} text="Save" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UnitAdd;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#36393e",
  },
  view2: {
    flex: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
  },
  componentHeader: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
  },
});
