import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { serverClient } from "../Constant";
import BuildingList from "./Lists/BuildingList";
const Building = (props) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverClient}/api/v1/projects`)
      .then((response) => {
        setProjects(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.response), setLoading(false);
      });
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
        ALL BUILDINGS LIST:
      </Text>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#3A4F7A" />
        </View>
      ) : (
        <ScrollView style={{ marginHorizontal: 20 }}>
          {projects.map((project) => (
            <View key={project._id} style={{ marginVertical: 10 }}>
              <BuildingList navigation={props.navigation} data={project} />
            </View>
          ))}
        </ScrollView>
      )}

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
});
