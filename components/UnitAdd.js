import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import FormText from "./Forms/FormText";
import FormButton from "./Forms/FormButton";
import axios from "axios";
import { serverClient } from "../Constant";
const UnitAdd = (props) => {
  const [unitFloor, setUnitFloor] = useState();
  const [unitNumber, setUnitNumber] = useState();
  const [refresh, setRefresh] = useState(false);
  const buildingId = props.route.params.buildingId;

  const handleSave = () => {
    axios
      .post(`${serverClient}/api/v1/units`, {
        unitNumber: unitNumber,
        unitFloor: unitFloor,
        building: buildingId,
      })
      .then((response) => {
        setUnitFloor(null),
          setUnitNumber(null),
          setRefresh(true),
          props.navigation.navigate("Building", {
            refresh: true,
          }),
          Alert.alert("Data Saved");
      })
      .catch((err) => {
        Alert.alert(err), setRefresh(false);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>ENTER YOUR UNIT DETAILS</Text>
      </View>
      <View style={styles.view2}>
        <ScrollView>
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
