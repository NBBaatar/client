import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
} from "react-native";
import { serverClient } from "../Constant";
import axios from "axios";
import React, { useState, useEffect } from "react";
import FormText from "../components/Forms/FormText";
import ImagePicker from "../components/Forms/ImagePicker";
import FormButton from "../components/Forms/FormButton";
const UnitLandryUpdateAfter = (props) => {
  //After all states
  const [balconyLevelAfter, setBalconyLevelAfter] = useState([
    unitData?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].level,
  ]);
  const [balconyAngleAfter, setBalconyAngleAfter] = useState([
    unitData?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].angle,
  ]);
  const [balconyConcrateAfter, setBalconyConcrateAfter] = useState([
    unitData?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].concrate,
  ]);
  const [balconyPatchAfter, setBalconyPatchAfter] = useState([
    unitData?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].patch,
  ]);
  const [balconySubStraightAfter, setBalconySubStraightAfter] = useState([
    unitData?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].subStraight,
  ]);
  const [selectedImage, setSelectedImage] = useState();
  const [unitData, setUnitData] = useState();
  const buildingId = props.route.params.building;
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
                    level:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .balcony?.[0].level,
                    angle:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .balcony?.[0].angle,
                    concrate:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .balcony?.[0].concrate,
                    patch:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .balcony?.[0].patch,
                    subStraight:
                      unitData?.units?.[0].waterProof?.[0].before?.[0]
                        .balcony?.[0].subStraight,
                    photo: [
                      {
                        fileName:
                          unitData?.units?.[0].waterProof?.[0].before?.[0]
                            .balcony?.[0].photo?.[0].fileName,
                        uri: unitData?.units?.[0].waterProof?.[0].before?.[0]
                          .balcony?.[0].photo?.[0].uri,
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
                    level: balconyLevelAfter,
                    angle: balconyAngleAfter,
                    concrate: balconyConcrateAfter,
                    patch: balconyPatchAfter,
                    subStraight: balconySubStraightAfter,
                    photo: [
                      {
                        fileName: selectedImage,
                        uri: selectedImage,
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
        framingDoor: [
          {
            statusOf: unitData?.units?.[0].framingDoor?.[0].statusOf,
            reason: unitData?.units?.[0].framingDoor?.[0].reason,
            fireBox: unitData?.units?.[0].framingDoor?.[0].fireBox,
            fireRating: unitData?.units?.[0].framingDoor?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].framingDoor?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].framingDoor?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        framingSteel: [
          {
            statusOf: unitData?.units?.[0].framingSteel?.[0].statusOf,
            reason: unitData?.units?.[0].framingSteel?.[0].reason,
            fireRating: unitData?.units?.[0].framingSteel?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].framingSteel?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].framingSteel?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        electrical: [
          {
            statusOf: unitData?.units?.[0].electrical?.[0].statusOf,
            reason: unitData?.units?.[0].electrical?.[0].reason,
            fireRating: unitData?.units?.[0].electrical?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].electrical?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].electrical?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        plumbing: [
          {
            statusOf: unitData?.units?.[0].plumbing?.[0].statusOf,
            reason: unitData?.units?.[0].plumbing?.[0].reason,
            fireRating: unitData?.units?.[0].plumbing?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].plumbing?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].plumbing?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        ac: [
          {
            statusOf: unitData?.units?.[0].ac?.[0].statusOf,
            reason: unitData?.units?.[0].ac?.[0].reason,
            fireRating: unitData?.units?.[0].ac?.[0].fireRating,
            photo: [
              {
                fileName: unitData?.units?.[0].ac?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].ac?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        fireSprinkler: [
          {
            statusOf: unitData?.units?.[0].fireSprinkler?.[0].statusOf,
            reason: unitData?.units?.[0].fireSprinkler?.[0].reason,
            fireRating: unitData?.units?.[0].fireSprinkler?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].fireSprinkler?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].fireSprinkler?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        fireCable: [
          {
            statusOf: unitData?.units?.[0].fireCable?.[0].statusOf,
            reason: unitData?.units?.[0].fireCable?.[0].reason,
            fireRating: unitData?.units?.[0].fireCable?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].fireCable?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].fireCable?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        dryFireCable: [
          {
            statusOf: unitData?.units?.[0].dryFireCable?.[0].statusOf,
            reason: unitData?.units?.[0].dryFireCable?.[0].reason,
            fireRating: unitData?.units?.[0].dryFireCable?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].dryFireCable?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].dryFireCable?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        windows: [
          {
            statusOf: unitData?.units?.[0].windows?.[0].statusOf,
            reason: unitData?.units?.[0].windows?.[0].reason,
            fireRating: unitData?.units?.[0].windows?.[0].fireRating,
            photo: [
              {
                fileName: unitData?.units?.[0].windows?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].windows?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        plasterBoard: [
          {
            statusOf: unitData?.units?.[0].plasterBoard?.[0].statusOf,
            reason: unitData?.units?.[0].plasterBoard?.[0].reason,
            fireRating: unitData?.units?.[0].plasterBoard?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].plasterBoard?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].plasterBoard?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        tiles: [
          {
            ensuite: [
              {
                statusOf: unitData?.units?.[0].tiles?.[0].ensuite?.[0].statusOf,
                reason: unitData?.units?.[0].tiles?.[0].ensuite?.[0].reason,
                fireRating:
                  unitData?.units?.[0].tiles?.[0].ensuite?.[0].fireRating,
                photo: [
                  {
                    fileName:
                      unitData?.units?.[0].tiles?.[0].ensuite?.[0].photo?.[0]
                        .fileName,
                    uri: unitData?.units?.[0].tiles?.[0].ensuite?.[0].photo?.[0]
                      .uri,
                  },
                ],
              },
            ],
            laundry: [
              {
                statusOf: unitData?.units?.[0].tiles?.[0].laundry?.[0].statusOf,
                reason: unitData?.units?.[0].tiles?.[0].laundry?.[0].reason,
                fireRating:
                  unitData?.units?.[0].tiles?.[0].laundry?.[0].fireRating,
                photo: [
                  {
                    fileName:
                      unitData?.units?.[0].tiles?.[0].laundry?.[0].photo?.[0]
                        .fileName,
                    uri: unitData?.units?.[0].tiles?.[0].laundry?.[0].photo?.[0]
                      .uri,
                  },
                ],
              },
            ],
            kitchen: [
              {
                statusOf: unitData?.units?.[0].tiles?.[0].kitchen?.[0].statusOf,
                reason: unitData?.units?.[0].tiles?.[0].kitchen?.[0].reason,
                fireRating:
                  unitData?.units?.[0].tiles?.[0].kitchen?.[0].fireRating,
                photo: [
                  {
                    fileName:
                      unitData?.units?.[0].tiles?.[0].kitchen?.[0].photo?.[0]
                        .fileName,
                    uri: unitData?.units?.[0].tiles?.[0].kitchen?.[0].photo?.[0]
                      .uri,
                  },
                ],
              },
            ],
            bathroom: [
              {
                statusOf:
                  unitData?.units?.[0].tiles?.[0].bathroom?.[0].statusOf,
                reason: unitData?.units?.[0].tiles?.[0].bathroom?.[0].reason,
                fireRating:
                  unitData?.units?.[0].tiles?.[0].bathroom?.[0].fireRating,
                photo: [
                  {
                    fileName:
                      unitData?.units?.[0].tiles?.[0].bathroom?.[0].photo?.[0]
                        .fileName,
                    uri: unitData?.units?.[0].tiles?.[0].bathroom?.[0]
                      .photo?.[0].uri,
                  },
                ],
              },
            ],
          },
        ],
        kitchen: [
          {
            statusOf: unitData?.units?.[0].kitchen?.[0].statusOf,
            reason: unitData?.units?.[0].kitchen?.[0].reason,
            fireRating: unitData?.units?.[0].kitchen?.[0].fireRating,
            photo: [
              {
                fileName: unitData?.units?.[0].kitchen?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].kitchen?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        wardrobe: [
          {
            statusOf: unitData?.units?.[0].wardrobe?.[0].statusOf,
            reason: unitData?.units?.[0].wardrobe?.[0].reason,
            fireRating: unitData?.units?.[0].wardrobe?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].wardrobe?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].wardrobe?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        carpet: [
          {
            statusOf: unitData?.units?.[0].carpet?.[0].statusOf,
            reason: unitData?.units?.[0].carpet?.[0].reason,
            fireRating: unitData?.units?.[0].carpet?.[0].fireRating,
            photo: [
              {
                fileName: unitData?.units?.[0].carpet?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].carpet?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        paint: [
          {
            statusOf: unitData?.units?.[0].paint?.[0].statusOf,
            reason: unitData?.units?.[0].paint?.[0].reason,
            fireRating: unitData?.units?.[0].paint?.[0].fireRating,
            photo: [
              {
                fileName: unitData?.units?.[0].paint?.[0].photo?.[0].fileName,
                uri: unitData?.units?.[0].paint?.[0].photo?.[0].uri,
              },
            ],
          },
        ],
        shelfAnglesBriekWork: [
          {
            statusOf: unitData?.units?.[0].shelfAnglesBriekWork?.[0].statusOf,
            reason: unitData?.units?.[0].shelfAnglesBriekWork?.[0].reason,
            fireRating:
              unitData?.units?.[0].shelfAnglesBriekWork?.[0].fireRating,
            photo: [
              {
                fileName:
                  unitData?.units?.[0].shelfAnglesBriekWork?.[0].photo?.[0]
                    .fileName,
                uri: unitData?.units?.[0].shelfAnglesBriekWork?.[0].photo?.[0]
                  .uri,
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
          `${serverClient}/api/v1/units/${props.route.params.id}/landry-after`
        );
        xhr.send(fmData);
        Alert.alert("Data saved!");
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
            value={balconyLevelAfter}
            onChangeText={(value) => setBalconyLevelAfter(value)}
          />
          <FormText
            label="Enter unit's angle value: "
            placeholder="Please enter angle value"
            iconName="triangle"
            value={balconyAngleAfter}
            onChangeText={(value) => setBalconyAngleAfter(value)}
          />
          <FormText
            label="Enter unit's concrate value: "
            placeholder="Please enter concrate value"
            iconName="package"
            value={balconyConcrateAfter}
            onChangeText={(value) => setBalconyConcrateAfter(value)}
          />
          <FormText
            label="Enter unit's patch value: "
            placeholder="Please enter patch value"
            iconName="columns"
            value={balconyPatchAfter}
            onChangeText={(value) => setBalconyPatchAfter(value)}
          />
          <FormText
            label="Enter unit's Sub Straight value: "
            placeholder="Please Sub Straight value"
            iconName="layers"
            value={balconySubStraightAfter}
            onChangeText={(value) => setBalconySubStraightAfter(value)}
          />
          <ImagePicker setSelectedImage={setSelectedImage} />

          <FormButton onPress={handleUpdate} text="Update" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default UnitLandryUpdateAfter;

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
