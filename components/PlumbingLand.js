import {
  StyleSheet,
  Alert,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import { serverClient } from "../Constant";
import axios from "axios";
import FormButton from "../components/Forms/FormButton";
import * as Animatable from "react-native-animatable";

const PlumbingLand = (props) => {
  const [plumbing, setPlumbing] = useState([]);
  const data = props.route.params.unit;
  const id = props.route.params.id;
  const unit = props.route.params.unit;
  const building = props.route.params.unit.building;

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/units/${props.route.params.id}/plumbing`)
      .then((response) => {
        setPlumbing(response.data.data);
      })
      .catch((err) => Alert.alert(err));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>
          All Air conditioning details:
        </Text>
      </View>
      <Animatable.View animation="bounceInUp" style={styles.view2}>
        <Text style={styles.componentTitle}>
          Unit Number: {data.unitNumber}
        </Text>
        <FormButton
          onPress={() => {
            props.navigation.navigate("Plumbing add", {
              id: id,
              building: building,
            });
          }}
          text="Add"
        />
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
        <FlatList
          nestedScrollEnabled
          data={plumbing}
          keyExtractor={(item) => item._id}
          renderItem={(el) => {
            return (
              <View>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate("Plumbing detail", {
                      id: el.item._id,
                      unit: unit,
                    });
                  }}
                >
                  {el.item.photo.map((ele, index) => (
                    <>
                      <Image
                        key={index}
                        source={{
                          uri: ele.uri,
                        }}
                        style={styles.item}
                      />
                    </>
                  ))}
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </Animatable.View>
    </SafeAreaView>
  );
};

export default PlumbingLand;

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
    // resizeMode: "contain",
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
