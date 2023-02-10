import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { serverClient } from "../Constant";

import FormButton from "../components/Forms/FormButton";
import axios from "axios";

const WaterProofEnsuiteA = (props) => {
  const id = props.route.params.id;
  const unitId = props.route.params.unit;
  const buildingId = props.route.params.building;
  const [waterProof, setWaterProof] = useState();

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/waterproof/${id}`)
      .then((response) => {
        setWaterProof(response.data.data);
      })
      .catch((err) => Alert.alert(err));
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}> DETAILS</Text>
      </View>
      <View style={styles.view2}>
        <ScrollView>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Level: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].ensuit?.[0].level}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Angle: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].ensuit?.[0].angle}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Concrate: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].ensuit?.[0].concrate}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Patch: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].ensuit?.[0].patch}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Sub straight: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].ensuit?.[0].subStraight}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          >
            <Text style={styles.textLabelStyle}>List of all Images: </Text>
          </View>

          <Image
            key={id}
            source={{
              uri: waterProof?.after?.[0].ensuit?.[0].photo?.[0].uri,
            }}
            style={styles.item}
          />

          <FormButton
            onPress={() => {
              props.navigation.navigate("Unit update ensuit after", {
                id: id,
                unit: unitId,
                building: buildingId,
              });
            }}
            text="Edit"
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WaterProofEnsuiteA;

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
    width: 370,
    height: 230,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
