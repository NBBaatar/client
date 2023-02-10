import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { serverClient } from "../Constant";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

const TilesLand = (props) => {
  const [tiles, setTiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const data = props.route.params.unit;
  const id = props.route.params.id;
  const unit = props.route.params.unit._id;
  const building = props.route.params.unit.building;
  const noVal = "no data";
  const defaultPhoto = "no-photo.png";

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${serverClient}/api/v1/units/${props.route.params.id}/tiles`)
      .then((response) => {
        setTiles(response.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        Alert.alert(err);
      });
  }, []);
  const dummyData = {
    kitchen: [
      {
        statusOf: noVal,
        reason: noVal,
        fireRating: noVal,
        photo: [
          {
            fileName: defaultPhoto,
            uri: `${serverClient}/uploads/tiles/kitchen/` + defaultPhoto,
          },
        ],
      },
    ],
    bathroom: [
      {
        statusOf: noVal,
        reason: noVal,
        fireRating: noVal,
        photo: [
          {
            fileName: defaultPhoto,
            uri: `${serverClient}/uploads/tiles/bathroom/` + defaultPhoto,
          },
        ],
      },
    ],
    ensuite: [
      {
        statusOf: noVal,
        reason: noVal,
        fireRating: noVal,
        photo: [
          {
            fileName: defaultPhoto,
            uri: `${serverClient}/uploads/tiles/ensuite/` + defaultPhoto,
          },
        ],
      },
    ],
    laundry: [
      {
        statusOf: noVal,
        reason: noVal,
        fireRating: noVal,
        photo: [
          {
            fileName: defaultPhoto,
            uri: `${serverClient}/uploads/tiles/laundry/` + defaultPhoto,
          },
        ],
      },
    ],
    unit: unit,
    building: building,
  };
  const addTiles = () => {
    axios
      .post(`${serverClient}/api/v1/tiles`, dummyData)
      .then((response) => {
        Alert.alert("Data Saved");
        props.navigation.popToTop();
      })
      .catch((err) => {
        setIsLoading(false);
        Alert.alert(err);
      });
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>All Tiles details:</Text>
      </View>
      <Animatable.View animation="bounceInUp" style={styles.view2}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#383c4a" />
        ) : (
          <>
            <Text style={styles.componentTitle}>
              Unit Number: {data.unitNumber}
            </Text>

            <ScrollView>
              <Pressable style={styles.button} onPress={addTiles}>
                <Text style={styles.text_button}>
                  <Feather name="plus-circle" size={20} color="#fff" />
                </Text>
              </Pressable>

              <View
                style={{
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "200" }}>
                  KITCHEN:
                </Text>
                <ScrollView>
                  <View style={styles.itemHeadView}>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        {tiles.map((el) =>
                          el.kitchen.map((ele) =>
                            ele.photo.map((elem, index) => (
                              <>
                                <View style={{ flexDirection: "column" }}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      props.navigation.navigate(
                                        "Tiles kitchen",
                                        {
                                          id: el._id,
                                          building: building,
                                          unit: id,
                                          data: data,
                                        }
                                      );
                                    }}
                                  >
                                    <Image
                                      key={index}
                                      source={{
                                        uri: elem.uri,
                                      }}
                                      onLoadStart={() => setIsLoading(true)}
                                      style={styles.item}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </>
                            ))
                          )
                        )}
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View
                style={{
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "200" }}>
                  BATHROOM:
                </Text>
                <ScrollView>
                  <View style={styles.itemHeadView}>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        {tiles.map((el) =>
                          el.bathroom.map((ele) =>
                            ele.photo.map((elem, index) => (
                              <>
                                <View style={{ flexDirection: "column" }}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      props.navigation.navigate(
                                        "Tiles bathroom",
                                        {
                                          id: el._id,
                                          building: building,
                                          unit: id,
                                          data: data,
                                        }
                                      );
                                    }}
                                  >
                                    <Image
                                      key={index}
                                      source={{
                                        uri: elem.uri,
                                      }}
                                      onLoadStart={() => setIsLoading(true)}
                                      style={styles.item}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </>
                            ))
                          )
                        )}
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View
                style={{
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "200" }}>
                  LAUNDRY:
                </Text>
                <ScrollView>
                  <View style={styles.itemHeadView}>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        {tiles.map((el) =>
                          el.laundry.map((ele) =>
                            ele.photo.map((elem, index) => (
                              <>
                                <View style={{ flexDirection: "column" }}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      props.navigation.navigate(
                                        "Tiles laundry",
                                        {
                                          id: el._id,
                                          building: building,
                                          unit: id,
                                          data: data,
                                        }
                                      );
                                    }}
                                  >
                                    <Image
                                      key={index}
                                      source={{
                                        uri: elem.uri,
                                      }}
                                      onLoadStart={() => setIsLoading(true)}
                                      style={styles.item}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </>
                            ))
                          )
                        )}
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
              <View
                style={{
                  marginHorizontal: 5,
                  marginVertical: 5,
                }}
              >
                <Text style={{ fontSize: 30, fontWeight: "200" }}>
                  ENSUITE:
                </Text>
                <ScrollView>
                  <View style={styles.itemHeadView}>
                    <View style={{ flexDirection: "row" }}>
                      <View>
                        {tiles.map((el) =>
                          el.ensuite.map((ele) =>
                            ele.photo.map((elem, index) => (
                              <>
                                <View style={{ flexDirection: "column" }}>
                                  <TouchableOpacity
                                    onPress={() => {
                                      props.navigation.navigate(
                                        "Tiles ensuite",
                                        {
                                          id: el._id,
                                          building: building,
                                          unit: id,
                                          data: data,
                                        }
                                      );
                                    }}
                                  >
                                    <Image
                                      key={index}
                                      source={{
                                        uri: elem.uri,
                                      }}
                                      onLoadStart={() => setIsLoading(true)}
                                      style={styles.item}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </>
                            ))
                          )
                        )}
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </ScrollView>
          </>
        )}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default TilesLand;

const styles = StyleSheet.create({
  componentHeader: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
  },
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
  componentTitle: {
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    fontWeight: "300",
    fontSize: 22,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  componentContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
  },
  textLabelStyle: {
    fontSize: 24,
    fontWeight: "200",
  },
  textValueStyle: {
    fontSize: 24,
    fontWeight: "400",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 200,
    // resizeMode: "contain",
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  itemHeadView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  itemInnerView: {
    flexDirection: "column",
    width: 204,
    height: 185,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
    height: 50,
    width: 60,
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
});
