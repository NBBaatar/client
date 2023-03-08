import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { serverClient } from "../Constant";
import axios from "axios";
const CheckListDetailFire = (props) => {
  const [checkList, setCheckList] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = props.route.params.id;
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverClient}/api/v1/units/${id}/checklist`)
      .then((response) => {
        setCheckList(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        Alert.alert(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>ITP</Text>
      </View>
      <Animatable.View animation="bounceInUp" style={styles.view2}>
        <Text style={styles.componentTitle}>
          Unit Number: {props.route.params.unit.unitNumber}
        </Text>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <ActivityIndicator size="large" color="black" />
          </View>
        ) : (
          <>
            <View>
              <Text>ELECTRIC: {checkList?.fire?.[0].electric}</Text>
            </View>
          </>
        )}
      </Animatable.View>
    </SafeAreaView>
  );
};

export default CheckListDetailFire;

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
  componentHeader: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
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
});
