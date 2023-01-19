import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import FormButton from "../components/Forms/FormButton";
const FrameDoorDetail = (props) => {
  const data = props.route.params.unit;
  const uri = data.units?.[0].framingDoor?.[0].photo?.[0].uri;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>Door frame details: </Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.componentTitle}>
          Unit Number: {data.units?.[0].unitNumber}
        </Text>
        <ScrollView>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Status: </Text>
            <Text style={styles.textValueStyle}>
              {data.units?.[0].framingDoor?.[0].statusOf}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Reason: </Text>
            <Text style={styles.textValueStyle}>
              {data.units?.[0].framingDoor?.[0].reason}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Fire rate: </Text>
            <Text style={styles.textValueStyle}>
              {data.units?.[0].framingDoor?.[0].fireRating}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Fire box: </Text>
            <Text style={styles.textValueStyle}>
              {String(data.units?.[0].framingDoor?.[0].fireBox)}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Image: </Text>
          </View>
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 15,
              borderWidth: 1,
            }}
            source={{ uri: uri }}
          />
        </ScrollView>
        <FormButton
          onPress={() => {
            props.navigation.navigate("Door frame", {
              id: data._id,
              unit: data,
            });
          }}
          text="Edit"
        />
      </View>
    </SafeAreaView>
  );
};

export default FrameDoorDetail;

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
  componentContent: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginHorizontal: 10,
    marginVertical: 10,
    borderBottomWidth: 1,
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
  textLabelStyle: {
    fontSize: 24,
    fontWeight: "200",
  },
  textValueStyle: {
    fontSize: 24,
    fontWeight: "400",
  },
});
