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

const UnitUpdateBalconyBefore = (props) => {
  //Before all states
  const [balconyLevelBefore, setBalconyLevelBefore] = useState([
    unitData?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].level,
  ]);
  const [balconyAngleBefore, setBalconyAngleBefore] = useState([
    unitData?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].angle,
  ]);
  const [balconyConcrateBefore, setBalconyConcrateBefore] = useState([
    unitData?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].concrate,
  ]);
  const [balconyPatchBefore, setBalconyPatchBefore] = useState([
    unitData?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].patch,
  ]);
  const [balconySubStraightBefore, setBalconySubStraightBefore] = useState([
    unitData?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].subStraight,
  ]);
  const [selectedImage, setSelectedImage] = useState();
  const buildingId = props.route.params.building;
  const [unitData, setUnitData] = useState();
  const updateData = {
    units: [
      {
        unitNumber: unitData?.units?.[0].unitNumber,
        unitFloor: unitData?.units?.[0].unitFloor,
        waterProof: [
          {
            before: [
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
                        fileName: selectedImage,
                        uri: selectedImage,
                      },
                    ],
                  },
                ],
                bathroom: [
                  {
                    level:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .bathroom?.[0].level,
                    angle:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .bathroom?.[0].angle,
                    concrate:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .bathroom?.[0].concrate,
                    patch:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .bathroom?.[0].patch,
                    subStraight:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .bathroom?.[0].subStraight,
                    photo: [
                      {
                        fileName:
                          unitData?.units?.[0].waterProof?.[0].before?.[0]
                            .bathroom?.[0].photo?.[0].fileName,
                        uri: unitData?.units?.[0].waterProof?.[0].before?.[0]
                          .bathroom?.[0].photo?.[0].uri,
                      },
                    ],
                  },
                ],
                landry: [
                  {
                    level:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .landry?.[0].level,
                    angle:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .landry?.[0].angle,
                    concrate:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .landry?.[0].concrate,
                    patch:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .landry?.[0].patch,
                    subStraight:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .landry?.[0].subStraight,
                    photo: [
                      {
                        fileName:
                          unitData?.units?.[0].waterProof?.[0].before?.[0]
                            .landry?.[0].photo?.[0].fileName,
                        uri: unitData?.units?.[0].waterProof?.[0].before?.[0]
                          .landry?.[0].photo?.[0].uri,
                      },
                    ],
                  },
                ],
                ensuit: [
                  {
                    level:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .ensuit?.[0].level,
                    angle:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .ensuit?.[0].angle,
                    concrate:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .ensuit?.[0].concrate,
                    patch:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .ensuit?.[0].patch,
                    subStraight:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .ensuit?.[0].subStraight,
                    photo: [
                      {
                        fileName:
                          unitData?.units?.[0].waterProof?.[0].before?.[0]
                            .ensuit?.[0].photo?.[0].fileName,
                        uri: unitData?.units?.[0].waterProof?.[0].before?.[0]
                          .ensuit?.[0].photo?.[0].uri,
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
                    level:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .balcony?.[0].level,
                    angle:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .balcony?.[0].angle,
                    concrate:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .balcony?.[0].concrate,
                    patch:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .balcony?.[0].patch,
                    subStraight:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .balcony?.[0].subStraight,
                    photo: [
                      {
                        fileName:
                          unitData?.units?.[0].waterProof?.[0].after?.[0]
                            .balcony?.[0].photo?.[0].fileName,
                        uri: unitData?.units?.[0].waterProof?.[0].after?.[0]
                          .balcony?.[0].photo?.[0].uri,
                      },
                    ],
                  },
                ],
                bathroom: [
                  {
                    level:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .bathroom?.[0].level,
                    angle:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .bathroom?.[0].angle,
                    concrate:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .bathroom?.[0].concrate,
                    patch:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .bathroom?.[0].patch,
                    subStraight:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .bathroom?.[0].subStraight,
                    photo: [
                      {
                        fileName:
                          unitData?.units?.[0].waterProof?.[0].after?.[0]
                            .bathroom?.[0].photo?.[0].fileName,
                        uri: unitData?.units?.[0].waterProof?.[0].after?.[0]
                          .bathroom?.[0].photo?.[0].uri,
                      },
                    ],
                  },
                ],
                landry: [
                  {
                    level:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .landry?.[0].level,
                    angle:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .landry?.[0].angle,
                    concrate:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .landry?.[0].concrate,
                    patch:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .landry?.[0].patch,
                    subStraight:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .landry?.[0].subStraight,
                    photo: [
                      {
                        fileName:
                          unitData?.units?.[0].waterProof?.[0].after?.[0]
                            .landry?.[0].photo?.[0].fileName,
                        uri: unitData?.units?.[0].waterProof?.[0].after?.[0]
                          .landry?.[0].photo?.[0].uri,
                      },
                    ],
                  },
                ],
                ensuit: [
                  {
                    level:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .ensuit?.[0].level,
                    angle:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .ensuit?.[0].angle,
                    concrate:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .ensuit?.[0].concrate,
                    patch:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .ensuit?.[0].patch,
                    subStraight:
                      unitData?.units?.[0].waterProof?.[0].after?.[0]
                        .ensuit?.[0].subStraight,
                    photo: [
                      {
                        fileName:
                          unitData?.units?.[0].waterProof?.[0].after?.[0]
                            .ensuit?.[0].photo?.[0].fileName,
                        uri: unitData?.units?.[0].waterProof?.[0].after?.[0]
                          .ensuit?.[0].photo?.[0].uri,
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    building: buildingId,
    statusOf: [
      {
        complate: true,
        fixing: "No value",
        other: "No value",
      },
    ],
  };

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/units/${props.route.params.id}`)
      .then((response) => {
        setUnitData(response.data.data);
      })
      .catch((err) => Alert.alert(err));
  }, []);
  const handleUpdate = () => {
    axios
      .put(`${serverClient}/api/v1/units/${props.route.params.id}`, updateData)
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
        xhr.open(
          "PUT",
          `${serverClient}/api/v1/units/${props.route.params.id}/balcony-before`
        );
        xhr.send(fmData);
        Alert.alert("Data Saved!");
        // props.navigation.goBack();
      })
      .catch((err) => {
        Alert.alert(err);
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
          <ImagePicker setSelectedImage={setSelectedImage} />
          <FormButton onPress={handleUpdate} text="Update" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UnitUpdateBalconyBefore;

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
