import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { serverClient } from "../Constant";
import FormButton from "./Forms/FormButton";
import * as Animatable from "react-native-animatable";

const unitDetails = (props) => {
  const [unitDetail, setUnitDetail] = useState([]);
  //Before Balcony
  const beForeBalconyLevel =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].level;
  const beForeBalconyAngle =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].angle;
  const beForeBalconyConcrate =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].concrate;
  const beForeBalconyPatch =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].patch;
  const beForeBalconySubStraight =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].subStraight;
  const beforePhoto =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].balcony?.[0].photo?.[0]
      .uri;

  //Before bethroom
  const beForeBathroomLevel =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0].level;
  const beForeBathroomAngle =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0].angle;
  const beForeBathroomConcrate =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0].concrate;
  const beForeBathroomPatch =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0].patch;
  const beForeBathroomSubStraight =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0]
      .subStraight;
  const beforeBathroomPhoto =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0].photo?.[0]
      .uri;

  //Before laundry
  const beForeLaundryLevel =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].landry?.[0].level;
  const beForeLaundryAngle =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].landry?.[0].angle;
  const beForeLaundryConcrate =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].landry?.[0].concrate;
  const beForeLaundryPatch =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].landry?.[0].patch;
  const beForeLaundrySubStraight =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].landry?.[0].subStraight;
  const beforeLaundryPhoto =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].landry?.[0].photo?.[0]
      .uri;

  //Before Ensuit
  const beForeEnsuitLevel =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0].level;
  const beForeEnsuitAngle =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0].angle;
  const beForeEnsuitConcrate =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0].concrate;
  const beForeEnsuitPatch =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0].patch;
  const beForeEnsuitSubStraight =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0].subStraight;
  const beforeEnsuitPhoto =
    unitDetail?.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0].photo?.[0]
      .uri;

  //After balcony
  const afterBalconyLevel =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].balcony?.[0].level;
  const afterBalconyAngle =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].balcony?.[0].angle;
  const afterBalconyConcrate =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].balcony?.[0].concrate;
  const afterBalconyPatch =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].balcony?.[0].patch;
  const afterBalconySubStraight =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].balcony?.[0].subStraight;
  const afterPhoto =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].balcony?.[0].photo?.[0]
      .uri;

  //After bathroom
  const afterBathroomLevel =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0].level;
  const afterBathroomAngle =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0].angle;
  const afterBathroomConcrate =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0].concrate;
  const afterBathroomPatch =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0].patch;
  const afterBathroomSubStraight =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0].subStraight;
  const afterBathroomPhoto =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0].photo?.[0]
      .uri;

  //After laundry
  const afterLaundryLevel =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].level;
  const afterLaundryAngle =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].angle;
  const afterLaundryConcrate =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].concrate;
  const afterLaundryPatch =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].patch;
  const afterLaundrySubStraight =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].subStraight;
  const afterLaundryPhoto =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].landry?.[0].photo?.[0]
      .uri;

  //After Ensuit
  const afterEnsuitLevel =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0].level;
  const afterEnsuitAngle =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0].angle;
  const afterEnsuitConcrate =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0].concrate;
  const afterEnsuitPatch =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0].patch;
  const afterEnsuitSubStraight =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0].subStraight;
  const afterEnsuitPhoto =
    unitDetail?.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0].photo?.[0]
      .uri;

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/units/${props.route.params.id}`)
      .then((response) => {
        setUnitDetail(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>UNIT DETAILS</Text>
      </View>
      <Animatable.View animation="fadeInRightBig" style={styles.view2}>
        <ScrollView>
          <View style={styles.columnView}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>BALCONY: </Text>
            <View style={styles.rowView}>
              <View style={styles.contentView}>
                <View>
                  <Text style={{ fontSize: 23, marginBottom: 15 }}>Before</Text>
                  {beForeBalconyLevel ? (
                    <Text style={styles.textForm}>
                      Level: {beForeBalconyLevel}
                    </Text>
                  ) : (
                    <Text style={styles.textForm}>No value</Text>
                  )}
                  <Text style={styles.textForm}>
                    Angle:{" "}
                    {beForeBalconyAngle ? (
                      <Text style={styles.textForm}>{beForeBalconyAngle}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Concrate:{" "}
                    {beForeBalconyConcrate ? (
                      <Text style={styles.textForm}>
                        {beForeBalconyConcrate}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Patch:{" "}
                    {beForeBalconyPatch ? (
                      <Text style={styles.textForm}>{beForeBalconyPatch}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Substraight:{" "}
                    {beForeBalconySubStraight ? (
                      <Text style={styles.textForm}>
                        {beForeBalconySubStraight}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <View style={styles.ImageView}>
                    <View style={styles.Image}>
                      {beforePhoto ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 15,
                            borderWidth: 1,
                          }}
                          source={{ uri: beforePhoto }}
                        />
                      ) : (
                        <Text style={styles.textForm}>No value</Text>
                      )}
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 23, marginBottom: 15 }}>After</Text>
                  {afterBalconyLevel ? (
                    <Text style={styles.textForm}>
                      Level: {afterBalconyLevel}
                    </Text>
                  ) : (
                    <Text style={styles.textForm}>No value</Text>
                  )}
                  <Text style={styles.textForm}>
                    Angle:{" "}
                    {afterBalconyAngle ? (
                      <Text style={styles.textForm}>{afterBalconyAngle}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Concrate:{" "}
                    {afterBalconyConcrate ? (
                      <Text style={styles.textForm}>
                        {afterBalconyConcrate}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Patch:{" "}
                    {afterBalconyPatch ? (
                      <Text style={styles.textForm}>{afterBalconyPatch}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Substraight:{" "}
                    {afterBalconySubStraight ? (
                      <Text style={styles.textForm}>
                        {afterBalconySubStraight}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <View style={styles.ImageView}>
                    <View style={styles.Image}>
                      {afterPhoto ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 15,
                            borderWidth: 1,
                          }}
                          source={{ uri: afterPhoto }}
                        />
                      ) : (
                        <Text style={styles.textForm}>No value</Text>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.columnView}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>BATHROOM: </Text>
            <View style={styles.rowView}>
              <View style={styles.contentView}>
                <View>
                  <Text style={{ fontSize: 23, marginBottom: 15 }}>Before</Text>
                  {beForeBathroomLevel ? (
                    <Text style={styles.textForm}>
                      Level: {beForeBathroomLevel}
                    </Text>
                  ) : (
                    <Text style={styles.textForm}>No value</Text>
                  )}
                  <Text style={styles.textForm}>
                    Angle:{" "}
                    {beForeBathroomAngle ? (
                      <Text style={styles.textForm}>{beForeBathroomAngle}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Concrate:{" "}
                    {beForeBathroomConcrate ? (
                      <Text style={styles.textForm}>
                        {beForeBathroomConcrate}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Patch:{" "}
                    {beForeBathroomPatch ? (
                      <Text style={styles.textForm}>{beForeBathroomPatch}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Substraight:{" "}
                    {beForeBathroomSubStraight ? (
                      <Text style={styles.textForm}>
                        {beForeBathroomSubStraight}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <View style={styles.ImageView}>
                    <View style={styles.Image}>
                      {beforeBathroomPhoto ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 15,
                            borderWidth: 1,
                          }}
                          source={{ uri: beforeBathroomPhoto }}
                        />
                      ) : (
                        <Text style={styles.textForm}>No value</Text>
                      )}
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 23, marginBottom: 15 }}>After</Text>
                  {afterBathroomLevel ? (
                    <Text style={styles.textForm}>
                      Level: {afterBathroomLevel}
                    </Text>
                  ) : (
                    <Text style={styles.textForm}>No value</Text>
                  )}
                  <Text style={styles.textForm}>
                    Angle:{" "}
                    {afterBathroomAngle ? (
                      <Text style={styles.textForm}>{afterBathroomAngle}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Concrate:{" "}
                    {afterBathroomConcrate ? (
                      <Text style={styles.textForm}>
                        {afterBathroomConcrate}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Patch:{" "}
                    {afterBathroomPatch ? (
                      <Text style={styles.textForm}>{afterBathroomPatch}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Substraight:{" "}
                    {afterBathroomSubStraight ? (
                      <Text style={styles.textForm}>
                        {afterBathroomSubStraight}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <View style={styles.ImageView}>
                    <View style={styles.Image}>
                      {afterBathroomPhoto ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 15,
                            borderWidth: 1,
                          }}
                          source={{ uri: afterBathroomPhoto }}
                        />
                      ) : (
                        <Text style={styles.textForm}>No value</Text>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.columnView}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>LAUNDRY: </Text>
            <View style={styles.rowView}>
              <View style={styles.contentView}>
                <View>
                  <Text style={{ fontSize: 23, marginBottom: 15 }}>Before</Text>
                  {beForeLaundryLevel ? (
                    <Text style={styles.textForm}>
                      Level: {beForeLaundryLevel}
                    </Text>
                  ) : (
                    <Text style={styles.textForm}>No value</Text>
                  )}
                  <Text style={styles.textForm}>
                    Angle:{" "}
                    {beForeLaundryAngle ? (
                      <Text style={styles.textForm}>{beForeLaundryAngle}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Concrate:{" "}
                    {beForeLaundryConcrate ? (
                      <Text style={styles.textForm}>
                        {beForeLaundryConcrate}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Patch:{" "}
                    {beForeLaundryPatch ? (
                      <Text style={styles.textForm}>{beForeLaundryPatch}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Substraight:{" "}
                    {beForeLaundrySubStraight ? (
                      <Text style={styles.textForm}>
                        {beForeLaundrySubStraight}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <View style={styles.ImageView}>
                    <View style={styles.Image}>
                      {beforeLaundryPhoto ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 15,
                            borderWidth: 1,
                          }}
                          source={{ uri: beforeLaundryPhoto }}
                        />
                      ) : (
                        <Text style={styles.textForm}>No value</Text>
                      )}
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 23, marginBottom: 15 }}>After</Text>
                  {afterLaundryLevel ? (
                    <Text style={styles.textForm}>
                      Level: {afterLaundryLevel}
                    </Text>
                  ) : (
                    <Text style={styles.textForm}>No value</Text>
                  )}
                  <Text style={styles.textForm}>
                    Angle:{" "}
                    {afterLaundryAngle ? (
                      <Text style={styles.textForm}>{afterLaundryAngle}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Concrate:{" "}
                    {afterLaundryConcrate ? (
                      <Text style={styles.textForm}>
                        {afterLaundryConcrate}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Patch:{" "}
                    {afterLaundryPatch ? (
                      <Text style={styles.textForm}>{afterLaundryPatch}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Substraight:{" "}
                    {afterLaundrySubStraight ? (
                      <Text style={styles.textForm}>
                        {afterLaundrySubStraight}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <View style={styles.ImageView}>
                    <View style={styles.Image}>
                      {afterLaundryPhoto ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 15,
                            borderWidth: 1,
                          }}
                          source={{ uri: afterLaundryPhoto }}
                        />
                      ) : (
                        <Text style={styles.textForm}>No value</Text>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.columnView}>
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>ENSUIT: </Text>
            <View style={styles.rowView}>
              <View style={styles.contentView}>
                <View>
                  <Text style={{ fontSize: 23, marginBottom: 15 }}>Before</Text>
                  {beForeEnsuitLevel ? (
                    <Text style={styles.textForm}>
                      Level: {beForeEnsuitLevel}
                    </Text>
                  ) : (
                    <Text style={styles.textForm}>No value</Text>
                  )}
                  <Text style={styles.textForm}>
                    Angle:{" "}
                    {beForeEnsuitAngle ? (
                      <Text style={styles.textForm}>{beForeEnsuitAngle}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Concrate:{" "}
                    {beForeEnsuitConcrate ? (
                      <Text style={styles.textForm}>
                        {beForeEnsuitConcrate}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Patch:{" "}
                    {beForeEnsuitPatch ? (
                      <Text style={styles.textForm}>{beForeEnsuitPatch}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Substraight:{" "}
                    {beForeEnsuitSubStraight ? (
                      <Text style={styles.textForm}>
                        {beForeEnsuitSubStraight}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <View style={styles.ImageView}>
                    <View style={styles.Image}>
                      {beforeEnsuitPhoto ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 15,
                            borderWidth: 1,
                          }}
                          source={{ uri: beforeEnsuitPhoto }}
                        />
                      ) : (
                        <Text style={styles.textForm}>No value</Text>
                      )}
                    </View>
                  </View>
                </View>
                <View>
                  <Text style={{ fontSize: 23, marginBottom: 15 }}>After</Text>
                  {afterEnsuitLevel ? (
                    <Text style={styles.textForm}>
                      Level: {afterEnsuitLevel}
                    </Text>
                  ) : (
                    <Text style={styles.textForm}>No value</Text>
                  )}
                  <Text style={styles.textForm}>
                    Angle:{" "}
                    {afterEnsuitAngle ? (
                      <Text style={styles.textForm}>{afterEnsuitAngle}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Concrate:{" "}
                    {afterEnsuitConcrate ? (
                      <Text style={styles.textForm}>{afterEnsuitConcrate}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Patch:{" "}
                    {afterEnsuitPatch ? (
                      <Text style={styles.textForm}>{afterEnsuitPatch}</Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <Text style={styles.textForm}>
                    Substraight:{" "}
                    {afterEnsuitSubStraight ? (
                      <Text style={styles.textForm}>
                        {afterEnsuitSubStraight}
                      </Text>
                    ) : (
                      <Text style={styles.textForm}>No value</Text>
                    )}
                  </Text>
                  <View style={styles.ImageView}>
                    <View style={styles.Image}>
                      {afterEnsuitPhoto ? (
                        <Image
                          style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: 15,
                            borderWidth: 1,
                          }}
                          source={{ uri: afterEnsuitPhoto }}
                        />
                      ) : (
                        <Text style={styles.textForm}>No value</Text>
                      )}
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <FormButton
            onPress={() => {
              props.navigation.navigate("Unit View", {
                units: unitDetail,
              });
            }}
            text="More"
          />
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default unitDetails;

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
  rowView: {
    flexDirection: "row",
    flex: 1,
    // justifyContent: "space-around",
    paddingHorizontal: 3,
    marginHorizontal: 5,
    marginBottom: 5,
    marginTop: 5,
    padding: 5,
  },
  columnView: {
    flexDirection: "column",
    flex: 1,
  },
  contentView: {
    justifyContent: "space-around",
    borderRadius: 15,
    borderWidth: 1,
    width: "auto",
    height: "auto",
    flex: 1,
    paddingHorizontal: 5,
    marginHorizontal: 10,
  },
  componentHeader: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
  },
  ImageView: { alignItems: "center", marginBottom: 15 },
  Image: {
    width: "90%",
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  textForm: {
    marginLeft: 10,
    marginBottom: 15,
    fontSize: 18,
    justifyContent: "space-between",
  },
});
