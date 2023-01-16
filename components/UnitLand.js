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
const UnitLand = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <Animatable.View animation="fadeInDownBig" style={styles.view1}>
        <View>
          <Text style={styles.componentHeader}>Unit's Check list</Text>
        </View>
        <ScrollView>
          <View style={styles.view2}>
            <Pressable
              onPress={() => {
                props.navigation.navigate("UnitDetails");
              }}
            >
              <Text style={styles.textStyle}>Water proof</Text>
            </Pressable>

            <Text style={styles.textStyle}>Frame door</Text>
            <Text style={styles.textStyle}>Frame steel</Text>
            <Text style={styles.textStyle}>Electrical</Text>
            <Text style={styles.textStyle}>Plumbing</Text>
            <Text style={styles.textStyle}>Air condintioning</Text>
            <Text style={styles.textStyle}>Fire Sprinkler</Text>
            <Text style={styles.textStyle}>Fire Cable</Text>
            <Text style={styles.textStyle}>Dry's fire Cable</Text>
            <Text style={styles.textStyle}>Windows</Text>
            <Text style={styles.textStyle}>Plaster board</Text>
            <Text style={styles.textStyle}>Tiles</Text>
            <Text style={styles.textStyle}>Kitchen</Text>
            <Text style={styles.textStyle}>Wardrobe</Text>
            <Text style={styles.textStyle}>Carpet</Text>
            <Text style={styles.textStyle}>Paint</Text>
            <Text style={styles.textStyle}>Shelf angles</Text>
          </View>
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default UnitLand;

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
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
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
