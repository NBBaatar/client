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

const TilesEedit = (props) => {
  const id = props.route.params.id;
  const unit = props.route.params.unit;
  const building = props.route.params.building;
  const data = props.route.params.data;
  const [statusOf, setStatusOf] = useState(null);
  const [reason, setReason] = useState(null);
  const [fireRating, setFireRating] = useState(null);
  const [imageName, setImageName] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [tiles, setTiles] = useState([]);
  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/tiles/${id}`)
      .then((response) => {
        setTiles(response.data.data);
      })
      .catch((err) => Alert.alert(err));
  }, []);

  const unitFillData = {
    kitchen: [
      {
        statusOf: tiles?.kitchen?.[0].statusOf,
        reason: tiles?.kitchen?.[0].reason,
        fireRating: tiles?.kitchen?.[0].fireRating,
        photo: [
          {
            fileName: tiles?.kitchen?.[0].photo?.[0].fileName,
            uri: tiles?.kitchen?.[0].photo?.[0].uri,
          },
        ],
      },
    ],
    bathroom: [
      {
        statusOf: tiles?.bathroom?.[0].statusOf,
        reason: tiles?.bathroom?.[0].reason,
        fireRating: tiles?.bathroom?.[0].fireRating,
        photo: [
          {
            fileName: tiles?.bathroom?.[0].photo?.[0].fileName,
            uri: tiles?.bathroom?.[0].photo?.[0].uri,
          },
        ],
      },
    ],
    ensuite: [
      {
        statusOf: statusOf,
        reason: reason,
        fireRating: fireRating,
        photo: [
          {
            fileName: imageName,
            uri: `${serverClient}/uploads/tiles/ensuite/` + imageName,
          },
        ],
      },
    ],
    laundry: [
      {
        statusOf: tiles?.laundry?.[0].statusOf,
        reason: tiles?.laundry?.[0].reason,
        fireRating: tiles?.laundry?.[0].fireRating,
        photo: [
          {
            fileName: tiles?.laundry?.[0].photo?.[0].fileName,
            uri: tiles?.laundry?.[0].photo?.[0].uri,
          },
        ],
      },
    ],
    unit: unit,
    building: building,
  };

  const handleUpdate = () => {
    axios
      .put(`${serverClient}/api/v1/tiles/${id}`, unitFillData)
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
          `${serverClient}/api/v1/tiles/${props.route.params.id}/upload/ensuite`
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
        <Text style={styles.componentHeader}>TILES: UNIT</Text>
      </View>
      <View style={styles.view2}>
        <ScrollView style={{ flex: 1 }}>
          <FormText
            label="Enter unit's Tile status: "
            placeholder="Please enter Tile status"
            iconName="file-text"
            value={statusOf}
            onChangeText={(value) => setStatusOf(value)}
          />
          <FormText
            label="Enter unit's Tile reason: "
            placeholder="Please enter Tile reason"
            iconName="award"
            value={reason}
            onChangeText={(value) => setReason(value)}
          />
          <FormText
            label="Enter unit's Tile fire rate: "
            placeholder="Please enter Tile fire rate"
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

export default TilesEedit;

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
