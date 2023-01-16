import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as Animatable from "react-native-animatable";
import { serverClient } from "../../Constant";
import BuildingEach from "../BuildingEach";
const BuildingList = (props) => {
  const [buildings, setBuildings] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverClient}/api/v1/projects/${props.data._id}/building`)
      .then((response) => {
        setBuildings(response.data.data);
        setLoading(false);
      })
      .catch(
        (err) => console.log("Error appear: => ", err.response),
        setLoading(false)
      );
  }, []);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "300" }}>
        Project name:
        <Text style={{ fontSize: 24, fontWeight: "200", fontStyle: "italic" }}>
          {" "}
          {props.data.name}
        </Text>
      </Text>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "100",
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        Which Building:
      </Text>
      <FlatList
        horizontal
        data={buildings}
        keyExtractor={(building) => building._id}
        renderItem={(building) => {
          return (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Unit", {
                    id: building.item._id,
                  });
                }}
              >
                <BuildingEach data={building.item} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default BuildingList;

const styles = StyleSheet.create({
  item: {
    padding: "auto",
    marginVertical: 5,
    marginHorizontal: 20,
    height: 80,
    width: 150,
    aspectRatio: 2,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginTop: 10,
    marginRight: "auto",
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
  },
});
