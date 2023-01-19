import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { serverClient } from "../Constant";
import UnitList from "./Lists/UnitList";
const Unit = (props) => {
  const [buildings, setBuildings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/buildings/${props.route.params.id}/unit`)
      .then((response) => {
        setBuildings(response.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.response), setLoading(false));
  }, [props.route.params]);
  return (
    <Animatable.View animation="fadeInDownBig" style={styles.center}>
      <Text
        style={{
          fontWeight: "300",
          fontSize: 30,
          marginBottom: 15,
          borderBottomWidth: 1,
          padding: 5,
          margin: 5,
        }}
      >
        ALL RELATED BUILDING UNITS LIST:
      </Text>
      <Text style={{ fontSize: 24, fontWeight: "300" }}>Unit List:</Text>
      {buildings.length > 0 ? (
        <ScrollView
          style={{
            marginHorizontal: 20,
          }}
        >
          {buildings.map((building) => (
            <View
              key={building._id}
              style={{
                marginVertical: 10,
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <UnitList navigation={props.navigation} data={building} />
            </View>
          ))}
        </ScrollView>
      ) : (
        <View
          style={{
            marginVertical: 10,
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "400" }}>
            There are no related Units in this Building...
          </Text>
        </View>
      )}

      <Text style={{ fontSize: 20, fontWeight: "200", borderBottomWidth: 1 }}>
        Click the button for create new Unit
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Unit Add");
        }}
      >
        <Text style={styles.text_button}>+</Text>
      </Pressable>
    </Animatable.View>
  );
};

export default Unit;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  text_button: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 75,
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
  item: {
    // backgroundColor: "grey",
    padding: "auto",
    marginVertical: 5,
    marginHorizontal: 20,
    height: 50,
    width: 400,
    aspectRatio: 7,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
});
