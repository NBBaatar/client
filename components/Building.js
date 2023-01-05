import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  FlatList,
} from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { serverClient } from "../Constant";
const Building = (props) => {
  const [buildings, setBuildings] = useState([]);

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/buildings`)
      .then((response) => {
        setBuildings(response.data.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
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
        ALL BUILDINGS LIST:
      </Text>
      <FlatList
        nestedScrollEnabled
        data={buildings}
        keyExtractor={(item) => item.id}
        renderItem={(el) => {
          return (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Unit", {
                    id: el.item._id,
                  });
                }}
              >
                <Text>{el.item.buildingNumber}</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <Text style={{ fontSize: 20, fontWeight: "200", borderBottomWidth: 1 }}>
        Click the button for create new Building
      </Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          props.navigation.navigate("Building Add");
        }}
      >
        <Text style={styles.text_button}>+</Text>
      </Pressable>
    </Animatable.View>
  );
};

export default Building;
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
