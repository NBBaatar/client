import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { serverClient } from "../Constant";
import FormText from "../components/Forms/FormText";
import ImagePicker from "../components/Forms/ImagePicker";
import FormButton from "../components/Forms/FormButton";
import axios from "axios";

const UnitUpdateBalconyAfter = (props) => {
  //Before all states
  const [balconyLevelBefore, setBalconyLevelBefore] = useState(null);
  const [balconyAngleBefore, setBalconyAngleBefore] = useState(null);
  const [balconyConcrateBefore, setBalconyConcrateBefore] = useState(null);
  const [balconyPatchBefore, setBalconyPatchBefore] = useState(null);
  const [balconySubStraightBefore, setBalconySubStraightBefore] =
    useState(null);
  const [imageName, setImageName] = useState(null);
  const [selectedImage, setSelectedImage] = useState();
  const buildingId = props.route.params.building;
  const id = props.route.params.id;
  const unitId = props.route.params.unit;
  const [waterProof, setWaterProof] = useState();
  const updateData = {
    before: [
      {
        balcony: [
          {
            level: waterProof?.before?.[0].balcony?.[0].level,
            angle: waterProof?.before?.[0].balcony?.[0].level,
            concrate: waterProof?.before?.[0].balcony?.[0].level,
            patch: waterProof?.before?.[0].balcony?.[0].level,
            subStraight: waterProof?.before?.[0].balcony?.[0].level,
            photo: [
              {
                fileName:
                  waterProof?.before?.[0].balcony?.[0].photo?.[0].fileName,
                uri: waterProof?.before?.[0].balcony?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        bathroom: [
          {
            level: waterProof?.before?.[0].bathroom?.[0].level,
            angle: waterProof?.before?.[0].bathroom?.[0].angle,
            concrate: waterProof?.before?.[0].bathroom?.[0].concrate,
            patch: waterProof?.before?.[0].bathroom?.[0].patch,
            subStraight: waterProof?.before?.[0].bathroom?.[0].subStraight,
            photo: [
              {
                fileName:
                  waterProof?.before?.[0].bathroom?.[0].photo?.[0].fileName,
                uri: waterProof?.before?.[0].bathroom?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        landry: [
          {
            level: waterProof?.before?.[0].landry?.[0].level,
            angle: waterProof?.before?.[0].landry?.[0].angle,
            concrate: waterProof?.before?.[0].landry?.[0].concrate,
            patch: waterProof?.before?.[0].landry?.[0].patch,
            subStraight: waterProof?.before?.[0].landry?.[0].subStraight,
            photo: [
              {
                fileName:
                  waterProof?.before?.[0].landry?.[0].photo?.[0].fileName,
                uri: waterProof?.before?.[0].landry?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        ensuit: [
          {
            level: waterProof?.before?.[0].ensuit?.[0].level,
            angle: waterProof?.before?.[0].ensuit?.[0].angle,
            concrate: waterProof?.before?.[0].ensuit?.[0].concrate,
            patch: waterProof?.before?.[0].ensuit?.[0].patch,
            subStraight: waterProof?.before?.[0].ensuit?.[0].subStraight,
            photo: [
              {
                fileName:
                  waterProof?.before?.[0].ensuit?.[0].photo?.[0].fileName,
                uri: waterProof?.before?.[0].ensuit?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
      },
    ],
    after: [
      {
        balcony: [
          {
            level: balconyLevelBefore,
            angle: balconyAngleBefore,
            concrate: balconyConcrateBefore,
            patch: balconyPatchBefore,
            subStraight: balconySubStraightBefore,
            photo: [
              {
                fileName: imageName,
                uri: `${serverClient}/uploads/balcony/after/` + imageName,
              },
            ],
          },
        ],
        bathroom: [
          {
            level: waterProof?.after?.[0].bathroom?.[0].level,
            angle: waterProof?.after?.[0].bathroom?.[0].angle,
            concrate: waterProof?.after?.[0].bathroom?.[0].concrate,
            patch: waterProof?.after?.[0].bathroom?.[0].patch,
            subStraight: waterProof?.after?.[0].bathroom?.[0].subStraight,
            photo: [
              {
                fileName:
                  waterProof?.after?.[0].bathroom?.[0].photo?.[0].fileName,
                uri: waterProof?.after?.[0].bathroom?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        landry: [
          {
            level: waterProof?.after?.[0].landry?.[0].level,
            angle: waterProof?.after?.[0].landry?.[0].angle,
            concrate: waterProof?.after?.[0].landry?.[0].concrate,
            patch: waterProof?.after?.[0].landry?.[0].patch,
            subStraight: waterProof?.after?.[0].landry?.[0].subStraight,
            photo: [
              {
                fileName:
                  waterProof?.after?.[0].landry?.[0].photo?.[0].fileName,
                uri: waterProof?.after?.[0].landry?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        ensuit: [
          {
            level: waterProof?.after?.[0].ensuit?.[0].level,
            angle: waterProof?.after?.[0].ensuit?.[0].angle,
            concrate: waterProof?.after?.[0].ensuit?.[0].concrate,
            patch: waterProof?.after?.[0].ensuit?.[0].patch,
            subStraight: waterProof?.after?.[0].ensuit?.[0].subStraight,
            photo: [
              {
                fileName:
                  waterProof?.after?.[0].ensuit?.[0].photo?.[0].fileName,
                uri: waterProof?.after?.[0].ensuit?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
      },
    ],
    statusOf: [{ complate: false, fixing: "No value", other: "No value" }],
    unit: unitId,
    buildingId: buildingId,
  };
  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/waterproof/${id}`)
      .then((response) => {
        setWaterProof(response.data.data);
      })
      .catch((err) => Alert.alert(err));
  }, []);
  const handleUpdate = () => {
    axios
      .put(
        `${serverClient}/api/v1/waterproof/${props.route.params.id}`,
        updateData
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
          `${serverClient}/api/v1/waterproof/${props.route.params.id}/balcony-after`
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
        <Text style={styles.componentHeader}> ENTER UPDATEDING VALUE</Text>
      </View>
      <View style={styles.view2}>
        <ScrollView>
          <FormText
            label="Enter unit's Level value: "
            placeholder="Please enter Level value"
            iconName="percent"
            value={balconyLevelBefore}
            onChangeText={(value) => setBalconyLevelBefore(value)}
          />
          <FormText
            label="Enter unit's angle value: "
            placeholder="Please enter angle value"
            iconName="triangle"
            value={balconyAngleBefore}
            onChangeText={(value) => setBalconyAngleBefore(value)}
          />
          <FormText
            label="Enter unit's concrate value: "
            placeholder="Please enter concrate value"
            iconName="package"
            value={balconyConcrateBefore}
            onChangeText={(value) => setBalconyConcrateBefore(value)}
          />
          <FormText
            label="Enter unit's patch value: "
            placeholder="Please enter patch value"
            iconName="columns"
            value={balconyPatchBefore}
            onChangeText={(value) => setBalconyPatchBefore(value)}
          />
          <FormText
            label="Enter unit's Sub Straight value: "
            placeholder="Please Sub Staight value"
            iconName="layers"
            value={balconySubStraightBefore}
            onChangeText={(value) => setBalconySubStraightBefore(value)}
          />
          <ImagePicker
            setSelectedImage={setSelectedImage}
            setImageName={setImageName}
          />
          <FormButton onPress={handleUpdate} text="Update" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UnitUpdateBalconyAfter;

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
