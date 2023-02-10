import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";

const WaterProofAddBeforeLand = (props) => {
  const id = props.route.params.id;
  const building = props.route.params.building;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <Animatable.View animation="fadeInDownBig" style={styles.view1}>
        <View>
          <Text style={styles.componentHeader}>Water proof</Text>
        </View>
        <ScrollView>
          <View style={styles.view2}>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Water Proof land", {
                  id: id,
                  building: building,
                });
              }}
            >
              <Text style={styles.textStyle}>Balcony</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Water Proof land", {
                  id: id,
                  building: building,
                });
              }}
            >
              <Text style={styles.textStyle}>Bathroom</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Water Proof land", {
                  id: id,
                  building: building,
                });
              }}
            >
              <Text style={styles.textStyle}>Laundry</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Water Proof land", {
                  id: id,
                  building: building,
                });
              }}
            >
              <Text style={styles.textStyle}>Ensuite</Text>
            </Pressable>
          </View>
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default WaterProofAddBeforeLand;

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
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: "#fff",
  },
  componentHeader: {
    color: "white",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 16,
  },
  textStyle: {
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontSize: 24,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
