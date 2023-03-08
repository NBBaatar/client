import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  Alert,
  Modal,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { serverClient } from "../Constant";
import FormButton from "../components/Forms/FormButton";
import axios from "axios";

const WaterProofBathroomA = (props) => {
  const id = props.route.params.id;
  const unitId = props.route.params.unit;
  const buildingId = props.route.params.building;
  const [waterProof, setWaterProof] = useState();
  const [showModel, setShowModel] = useState(false);
  const [email, setEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/waterproof/${id}`)
      .then((response) => {
        setWaterProof(response.data.data);
      })
      .catch((err) => Alert.alert(err));
  }, []);
  const sendEmail = () => {
    setIsLoading(true);
    axios
      .post(
        `${serverClient}/api/v1/waterproof/${props.route.params.id}/send/bathroom/a`,
        {
          email: email,
        }
      )
      .then((response) => {
        Alert.alert(`Email sent to ${email}`);
        setShowModel(!showModel);
        setIsLoading(false);
        setEmail(null);
      })
      .catch((err) => {
        Alert.alert(err);
        setIsLoading(false);
        setShowModel(!showModel);
        setEmail(null);
      });
  };
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
              {waterProof?.after?.[0].bathroom?.[0].level}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Angle: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].bathroom?.[0].angle}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Concrate: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].bathroom?.[0].concrate}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Patch: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].bathroom?.[0].patch}
            </Text>
          </View>
          <View style={styles.componentContent}>
            <Text style={styles.textLabelStyle}>Sub straight: </Text>
            <Text style={styles.textValueStyle}>
              {waterProof?.after?.[0].bathroom?.[0].subStraight}
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
              uri: waterProof?.after?.[0].bathroom?.[0].photo?.[0].uri,
            }}
            style={styles.item}
          />

          <FormButton
            onPress={() => {
              props.navigation.navigate("Unit bathroom update after", {
                id: id,
                unit: unitId,
                building: buildingId,
              });
            }}
            text="Edit"
          />
          <Modal
            animationType="slide"
            transparent={true}
            visible={showModel}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setShowModel(!showModel);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                {isLoading ? (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "100",
                        textAlign: "center",
                        marginBottom: 20,
                      }}
                    >
                      Sending Email please wait...
                    </Text>
                    <ActivityIndicator size="large" color="black" />
                  </View>
                ) : (
                  <>
                    <Text style={styles.modalText}>
                      Please enter your Email:
                    </Text>
                    <TextInput
                      style={{
                        width: 200,
                        height: 50,
                        marginBottom: 10,
                        borderColor: "black",
                        borderBottomWidth: 1,
                      }}
                      placeholder="Enter your email"
                      value={email}
                      onChangeText={(value) => setEmail(value)}
                    />
                    <View
                      style={{
                        flexDirection: "row",
                      }}
                    >
                      <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={sendEmail}
                      >
                        <Text style={styles.textStyle}>Send</Text>
                      </Pressable>
                      <Pressable
                        style={[styles.button, styles.buttonCancel]}
                        onPress={() => {
                          setShowModel(false);
                        }}
                      >
                        <Text style={styles.textStyle}>Cancel</Text>
                      </Pressable>
                    </View>
                  </>
                )}
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setShowModel(true)}
          >
            <Text style={styles.textStyle}>Send as Email</Text>
          </Pressable>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default WaterProofBathroomA;

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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    width: 370,
    height: 230,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "5%",
    marginRight: "5%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    backgroundColor: "#2e2c2b",
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonOpen: {
    backgroundColor: "#2e2c2b",
  },
  buttonClose: {
    backgroundColor: "#2e2c2b",
  },
  buttonCancel: {
    backgroundColor: "#ff5252",
  },
  textStyle: {
    fontSize: 14,
    color: "white",
    fontWeight: "300",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
