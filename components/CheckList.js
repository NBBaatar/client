import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";
import FormButton from "./Forms/FormButton";
import Feather from "react-native-vector-icons/Feather";
const CheckList = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>PLEASE CHOOSE YOUR ITP</Text>
      </View>
      <View style={styles.view2}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            marginTop: "50%",
            flexDirection: "row",
            paddingVertical: 12,
            paddingHorizontal: 32,
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <FormButton
              text={
                <Feather
                  onPress={() => {
                    props.navigation.navigate("Checklist detail", {
                      id: props.route.params.id,
                      unit: props.route.params.unit,
                      building: props.route.params.building,
                    });
                  }}
                  name="droplet"
                  size={20}
                  color="#fff"
                />
              }
            />
          </View>
          <View style={{ marginHorizontal: 10 }}>
            <FormButton
              onPress={() => {
                props.navigation.navigate("Checklist detail fire", {
                  id: props.route.params.id,
                  unit: props.route.params.unit,
                  building: props.route.params.building,
                });
              }}
              text={<Feather name="zap" size={20} color="#fff" />}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CheckList;

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
  textStyle: {
    borderWidth: 1,
    borderRadius: 30,
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
