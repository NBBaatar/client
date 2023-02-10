import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { serverClient } from "../Constant";
import FormText from "../components/Forms/FormText";
import FormButton from "../components/Forms/FormButton";

import ImagePicker from "../components/Forms/ImagePicker";

const DefectAdd = (props) => {
  const [reason, setReason] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [description, setDescription] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const unitId = props.route.params.id;
  const buildingId = props.route.params.building;
  const unitFillData = {
    reason: reason,
    description: description,
    photo: [
      {
        fileName: imageName,
        uri: `${serverClient}/uploads/defects/` + imageName,
      },
    ],
    unit: unitId,
    building: buildingId,
  };

  const saveUpdate = () => {
    axios
      .post(`${serverClient}/api/v1/defects`, unitFillData)
      .then((response) => {
        const newDefect = response.data.data;
        const xhr = new XMLHttpRequest();
        const fmData = new FormData();
        const fileName = selectedImage.substring(
          selectedImage.lastIndexOf("/") + 1
        );
        const fileExt = selectedImage.substring(
          selectedImage.lastIndexOf(".") + 1
        );
        fmData.append("file", {
          uri: selectedImage,
          type: `image/${fileExt}`,
          name: fileName,
        });
        setImageName(fileName);
        xhr.open(
          "PUT",
          `${serverClient}/api/v1/defects/${newDefect._id}/upload`
        );

        xhr.send(fmData);
        Alert.alert("Data saved!");
        props.navigation.popToTop();
      })
      .catch((err) => {
        Alert.alert("Error: ", err);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>DEFECTS: UNIT</Text>
      </View>
      <View style={styles.view2}>
        <ScrollView style={{ flex: 1 }}>
          <FormText
            label="Enter unit's Defects reason: "
            placeholder="Please enter Defects reason"
            iconName="award"
            value={reason}
            onChangeText={(value) => setReason(value)}
          />
          <FormText
            label="Enter unit's discription: "
            placeholder="Please enter your fire rate"
            iconName="star"
            value={description}
            onChangeText={(value) => setDescription(value)}
          />

          <ImagePicker
            setSelectedImage={setSelectedImage}
            setImageName={setImageName}
          />
        </ScrollView>
        <FormButton onPress={saveUpdate} text="Save" />
      </View>
    </SafeAreaView>
  );
};

export default DefectAdd;

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
  textStyle: {
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 24,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
