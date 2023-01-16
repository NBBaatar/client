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
import UnitEach from "../UnitEach";
const UnitList = (props) => {
  const [units, setUnits] = useState([props.data]);

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "300" }}>Unit List:</Text>
      <FlatList
        horizontal
        data={units}
        keyExtractor={(unit) => unit._id}
        renderItem={(unit) => {
          return (
            <View style={styles.item}>
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Units", {
                    id: unit.item._id,
                    units: unit,
                  });
                }}
              >
                <UnitEach data={unit.item} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default UnitList;

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
