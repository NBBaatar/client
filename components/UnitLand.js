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
                props.navigation.navigate("Water Proof land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Waterproof</Text>
            </Pressable>

            <Pressable
              onPress={() => {
                props.navigation.navigate("Door frame land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Door frames</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Steel framing land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Steel framing</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Hebel land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Hebel</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Electrical land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Electrical</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Plumbing land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Plumbing</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Ac Land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Air conditioning</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Fire Splinker land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Fire Sprinkler</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Fire Cable land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Fire Cable</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Dry Fire cable land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Dry fire Cables</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Windows land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Windows</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Plaster Board land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Plaster board</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Tiles land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Tiles</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Kitchen land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Kitchen</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Wardrobe land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Wardrobe</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Carpet Land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Carpet</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Paints land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Paint</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Shelf Angles land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Shelf angles</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                props.navigation.navigate("Defects land", {
                  id: props.route.params.id,
                  unit: props.route.params.units.item,
                });
              }}
            >
              <Text style={styles.textStyle}>Defects</Text>
            </Pressable>
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
