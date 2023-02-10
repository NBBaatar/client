import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { serverClient } from "../Constant";
import axios from "axios";
import FormButton from "../components/Forms/FormButton";
import * as Animatable from "react-native-animatable";

const FireCableDetail = (props) => {
  const [fireCable, setFireCable] = useState([]);
  const data = props.route.params.unit;
  console.log(props.route.params.id);
  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/firecable/${props.route.params.id}`)
      .then((response) => {
        setFireCable(response.data.data);
      })
      .catch((err) => Alert.alert(err));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>All Fire cable details:</Text>
      </View>
      <Animatable.View animation="bounceInUp" style={styles.view2}>
        <Text style={styles.componentTitle}>
          Unit Number: {data.unitNumber}
        </Text>

        <View style={styles.componentContent}>
          <Text style={styles.textLabelStyle}>Status of: </Text>
          <Text style={styles.textValueStyle}> {fireCable.statusOf}</Text>
        </View>
        <View style={styles.componentContent}>
          <Text style={styles.textLabelStyle}>Reason: </Text>
          <Text style={styles.textValueStyle}> {fireCable.reason}</Text>
        </View>
        <View style={styles.componentContent}>
          <Text style={styles.textLabelStyle}>Fire rating: </Text>
          <Text style={styles.textValueStyle}> {fireCable.fireRating}</Text>
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
          key={fireCable._id}
          source={{
            uri: fireCable.photo?.[0].uri,
          }}
          style={styles.item}
        />

        <FormButton
          onPress={() => {
            props.navigation.navigate("Fire Cable", {
              id: props.route.params.id,
              unit: data,
            });
          }}
          text="Edit"
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default FireCableDetail;

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
