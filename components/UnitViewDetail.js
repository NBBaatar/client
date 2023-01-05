import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
const UnitViewDetail = (props) => {
  const units = props.route.params.units;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}> Unit's all detail</Text>
      </View>
      <Animatable.View animation="bounceInUp" style={styles.main}>
        <ScrollView style={{ marginTop: 10 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginBottom: 15,
              borderBottomWidth: 1,
            }}
          >
            <View style={{ flex: 1, marginTop: -6 }}>
              <Text style={styles.contentTextHeader}>Unit Number:</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>{units.units?.[0].unitNumber}</Text>
            </View>
            <View style={{ flex: 1, marginTop: -6 }}>
              <Text style={styles.contentTextHeader}>Unit Floor:</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text>{units.units?.[0].unitFloor}</Text>
            </View>
          </View>
          {/* waterProof status */}
          <View style={{ flex: 1 }}>
            <Text
              style={{ textAlign: "center", marginBottom: 15, fontSize: 30 }}
            >
              Water Proof status
            </Text>
          </View>
          {/* Before Text */}
          <View style={{ flex: 1, marginLeft: 30 }}>
            <Text style={{ fontSize: 28, fontWeight: "400", marginBottom: 5 }}>
              Before
            </Text>
          </View>
          {/* balcony */}
          <View
            style={{ borderRadius: 20, borderWidth: 1, padding: 10, margin: 5 }}
          >
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "300", marginBottom: 15 }}
              >
                Balcony:
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Level:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].balcony?.[0]
                      .level
                  }
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Angle:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].balcony?.[0]
                      .angle
                  }
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Concrate:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].balcony?.[0]
                      .concrate
                  }
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Patch:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].balcony?.[0]
                      .patch
                  }
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Sub straight:</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].balcony?.[0]
                      .subStraight
                  }
                </Text>
              </View>
              {/* Action between Screens */}
              <View>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    props.navigation.navigate("Unit update balcony before", {
                      id: units._id,
                      building: units.building,
                    });
                  }}
                >
                  <Text style={styles.text_button}>
                    <Feather name="upload-cloud" size={20} color="#fff" />
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* Batroom */}
          <View
            style={{ borderRadius: 20, borderWidth: 1, padding: 10, margin: 5 }}
          >
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "300", marginBottom: 15 }}
              >
                Bathroom:
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Level:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0]
                      .level
                  }
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Angle:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0]
                      .angle
                  }
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Concrate:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0]
                      .concrate
                  }
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Patch:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0]
                      .patch
                  }
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Sub straight:</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].bathroom?.[0]
                      .subStraight
                  }
                </Text>
              </View>
              <View>
                <Pressable
                  style={styles.buttonSec}
                  onPress={() => {
                    props.navigation.navigate("Unit bathroom update before", {
                      id: units._id,
                      building: units.building,
                    });
                  }}
                >
                  <Text style={styles.text_button}>
                    <Feather name="upload-cloud" size={20} color="#fff" />
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* landry */}
          <View
            style={{ borderRadius: 20, borderWidth: 1, padding: 10, margin: 5 }}
          >
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "300", marginBottom: 15 }}
              >
                Laundy:
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Level:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].landry?.[0]
                      .level
                  }
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Angle:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].landry?.[0]
                      .angle
                  }
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Concrate:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].landry?.[0]
                      .concrate
                  }
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Patch:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].landry?.[0]
                      .patch
                  }
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Sub straight:</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].landry?.[0]
                      .subStraight
                  }
                </Text>
              </View>
              <View>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    props.navigation.navigate("Unit update laundry before", {
                      id: units._id,
                      building: units.building,
                    });
                  }}
                >
                  <Text style={styles.text_button}>
                    <Feather name="upload-cloud" size={20} color="#fff" />
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* ensuit */}
          <View
            style={{ borderRadius: 20, borderWidth: 1, padding: 10, margin: 5 }}
          >
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "300", marginBottom: 15 }}
              >
                Ensuit:
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Level:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0]
                      .level
                  }
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Angle:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0]
                      .angle
                  }
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Concrate:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0]
                      .concrate
                  }
                </Text>
              </View>
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Patch:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0]
                      .patch
                  }
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1, marginTop: -6 }}>
                <Text style={styles.contentTextHeader}>Sub straight:</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].before?.[0].ensuit?.[0]
                      .subStraight
                  }
                </Text>
              </View>
              <View>
                <Pressable
                  style={styles.buttonSec}
                  onPress={() => {
                    props.navigation.navigate("Unit update ensuit before", {
                      id: units._id,
                      building: units.building,
                    });
                  }}
                >
                  <Text style={styles.text_button}>
                    <Feather name="upload-cloud" size={20} color="#fff" />
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* After Text */}
          <View style={{ flex: 1, marginLeft: 30 }}>
            <Text style={{ fontSize: 28, fontWeight: "400", marginBottom: 5 }}>
              After
            </Text>
          </View>
          {/* balcony */}
          <View
            style={{ borderRadius: 20, borderWidth: 1, padding: 10, margin: 5 }}
          >
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "300", marginBottom: 15 }}
              >
                Balcony:
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Level:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].balcony?.[0]
                      .level
                  }
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Angle:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].balcony?.[0]
                      .angle
                  }
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Concrate:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].balcony?.[0]
                      .concrate
                  }
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Patch:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].balcony?.[0]
                      .patch
                  }
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Sub straight:</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].balcony?.[0]
                      .subStraight
                  }
                </Text>
              </View>
              <View>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    props.navigation.navigate("Unit update balcony after", {
                      id: units._id,
                      building: units.building,
                    });
                  }}
                >
                  <Text style={styles.text_button}>
                    <Feather name="upload-cloud" size={20} color="#fff" />
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* Batroom */}
          <View
            style={{ borderRadius: 20, borderWidth: 1, padding: 10, margin: 5 }}
          >
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "300", marginBottom: 15 }}
              >
                Bathroom:
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Level:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0]
                      .level
                  }
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Angle:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0]
                      .angle
                  }
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Concrate:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0]
                      .concrate
                  }
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Patch:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0]
                      .patch
                  }
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Sub straight:</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].bathroom?.[0]
                      .subStraight
                  }
                </Text>
              </View>
              <View>
                <Pressable
                  style={styles.buttonSec}
                  onPress={() => {
                    props.navigation.navigate("Unit bathroom update after", {
                      id: units._id,
                      building: units.building,
                    });
                  }}
                >
                  <Text style={styles.text_button}>
                    <Feather name="upload-cloud" size={20} color="#fff" />
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* landry */}
          <View
            style={{ borderRadius: 20, borderWidth: 1, padding: 10, margin: 5 }}
          >
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "300", marginBottom: 15 }}
              >
                Laundy:
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Level:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].landry?.[0]
                      .level
                  }
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Angle:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].landry?.[0]
                      .angle
                  }
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Concrate:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].landry?.[0]
                      .concrate
                  }
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Patch:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].landry?.[0]
                      .patch
                  }
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Sub straight:</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].landry?.[0]
                      .subStraight
                  }
                </Text>
              </View>
              <View>
                <Pressable
                  style={styles.button}
                  onPress={() => {
                    props.navigation.navigate("Unit update laundry after", {
                      id: units._id,
                      building: units.building,
                    });
                  }}
                >
                  <Text style={styles.text_button}>
                    <Feather name="upload-cloud" size={20} color="#fff" />
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
          {/* ensuit */}
          <View
            style={{ borderRadius: 20, borderWidth: 1, padding: 10, margin: 5 }}
          >
            <View style={{ flex: 1, marginLeft: 15 }}>
              <Text
                style={{ fontSize: 24, fontWeight: "300", marginBottom: 15 }}
              >
                Ensuit:
              </Text>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Level:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0]
                      .level
                  }
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Angle:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0]
                      .angle
                  }
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, flexDirection: "row", marginBottom: 15 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Concrate:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0]
                      .concrate
                  }
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Patch:</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0]
                      .patch
                  }
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View style={{ flex: 1 }}>
                <Text style={styles.contentTextHeader}>Sub straight:</Text>
              </View>
              <View style={{ flex: 3 }}>
                <Text>
                  {
                    units.units?.[0].waterProof?.[0].after?.[0].ensuit?.[0]
                      .subStraight
                  }
                </Text>
              </View>
              <View>
                <Pressable
                  style={styles.buttonSec}
                  onPress={() => {
                    props.navigation.navigate("Unit update ensuit after", {
                      id: units._id,
                      building: units.building,
                    });
                  }}
                >
                  <Text style={styles.text_button}>
                    <Feather name="upload-cloud" size={20} color="#fff" />
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default UnitViewDetail;

const styles = StyleSheet.create({
  headerView: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#36393e",
  },
  main: {
    flex: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "#fff",
  },
  headerText: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
  },
  contentTextHeader: {
    fontSize: 20,
    fontWeight: "200",
    justifyContent: "space-between",
  },
  text_button: {
    color: "white",
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 3,
    height: 40,
    width: 50,
    backgroundColor: "#2e2c2b",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonSec: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 3,
    height: 40,
    width: 50,
    backgroundColor: "#3A4F7A",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});
