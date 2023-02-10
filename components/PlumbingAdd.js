import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { serverClient } from "../Constant";
import FormText from "../components/Forms/FormText";
import FormButton from "../components/Forms/FormButton";
import ImagePicker from "../components/Forms/ImagePicker";

const PlumbingAdd = (props) => {
  const buildingId = props.route.params.building;
  const unitId = props.route.params.id;
  const [statusOf, setStatusOf] = useState(null);
  const [reason, setReason] = useState(null);
  const [fireRating, setFireRating] = useState(null);
  const [imageName, setImageName] = useState(null);

  const [selectedImage, setSelectedImage] = useState(null);
  const unitFillData = {
    statusOf: statusOf,
    reason: reason,
    fireRating: fireRating,
    photo: [
      {
        fileName: imageName,
        uri: `${serverClient}/uploads/plumbing/` + imageName,
      },
    ],
    unit: unitId,
    building: buildingId,
  };

  const handleUpdate = () => {
    axios
      .post(`${serverClient}/api/v1/plumbing`, unitFillData)
      .then((response) => {
        const newPlumbing = response.data.data;
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
          `${serverClient}/api/v1/plumbing/${newPlumbing._id}/upload`
        );

        xhr.send(fmData);
        Alert.alert("Data Saved!");
        props.navigation.popToTop();
      })
      .catch((err) => {
        Alert.alert("Error: ", err);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>PLUMBING: UNIT</Text>
      </View>
      <View style={styles.view2}>
        <ScrollView style={{ flex: 1 }}>
          <FormText
            label="Enter unit's Plumbing status: "
            placeholder="Please enter Plumbing status"
            iconName="file-text"
            value={statusOf}
            onChangeText={(value) => setStatusOf(value)}
          />
          <FormText
            label="Enter unit's Plumbing reason: "
            placeholder="Please enter Plumbing reason"
            iconName="award"
            value={reason}
            onChangeText={(value) => setReason(value)}
          />
          <FormText
            label="Enter unit's Plumbing fire rate: "
            placeholder="Please enter Plumbing fire rate"
            iconName="star"
            value={fireRating}
            onChangeText={(value) => setFireRating(value)}
          />

          <ImagePicker
            setSelectedImage={setSelectedImage}
            setImageName={setImageName}
          />
        </ScrollView>
        <FormButton onPress={handleUpdate} text="Save" />
      </View>
    </SafeAreaView>
  );
};

export default PlumbingAdd;

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
