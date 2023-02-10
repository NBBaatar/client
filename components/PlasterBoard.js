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

const PlasterBoard = (props) => {
  const buildingId = props.route.params.unit.building;
  const unitId = props.route.params.unit._id;
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
        uri: `${serverClient}/uploads/plasterboard/` + imageName,
      },
    ],
    unit: unitId,
    building: buildingId,
  };

  const handleUpdate = () => {
    axios
      .put(
        `${serverClient}/api/v1/plasterboard/${props.route.params.id}`,
        unitFillData
      )
      .then((response) => {
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
          `${serverClient}/api/v1/plasterboard/${props.route.params.id}/upload`
        );

        xhr.send(fmData);
        Alert.alert("Data updated!");
        props.navigation.popToTop();
      })
      .catch((err) => {
        Alert.alert("Error: ", err);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>PLASTER BOARD: UNIT</Text>
      </View>
      <View style={styles.view2}>
        <ScrollView style={{ flex: 1 }}>
          <FormText
            label="Enter unit's Plaster board status: "
            placeholder="Please enter Plaster board status"
            iconName="file-text"
            value={statusOf}
            onChangeText={(value) => setStatusOf(value)}
          />
          <FormText
            label="Enter unit's Plaster board reason: "
            placeholder="Please enter Plaster board reason"
            iconName="award"
            value={reason}
            onChangeText={(value) => setReason(value)}
          />
          <FormText
            label="Enter unit's Plaster board fire rate: "
            placeholder="Please enter Plaster board fire rate"
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

export default PlasterBoard;

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
