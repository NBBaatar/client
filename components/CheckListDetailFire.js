import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  Modal,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { serverClient } from "../Constant";
import axios from "axios";
import FormSwitch from "./Forms/FormSwitch";
import FormButton from "./Forms/FormButton";
const CheckListDetailFire = (props) => {
  const [checkList, setCheckList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [email, setEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // ITP's states
  const [electric, setElectric] = useState(false);
  const [plumbing, setPlumbing] = useState(false);
  const [dryFireRoughIn, setDryFireRoughIn] = useState(false);
  const [sprinklerRoughIn, setSprinklerRoughIn] = useState(false);
  const [acRoughIn, setAcRoughIn] = useState(false);
  const [plywoodSupports, setPlywoodSupports] = useState(false);
  const [windowDoorAngle, setWindowDoorAngle] = useState(false);
  const [HebelWalls, setHebelWalls] = useState(false);
  const [hebelCompliant, setHebelCompliant] = useState(false);
  const [flexibleSealant, setFlexibleSealant] = useState(false);
  const [SpecifySealant, setSpecifySealant] = useState(false);
  const [InspectConcrete, setInspectConcrete] = useState(false);
  const [frontFireRate, setFrontFireRate] = useState(false);
  const [pvc, setPvc] = useState(false);
  const [treated, setTreated] = useState(false);
  const [penetratingCables, setPenetratingCables] = useState(false);
  const [strippedThroughTheWall, setStrippedThroughTheWall] = useState(false);
  const [cables, setCables] = useState(false);
  const [sprinklerPipes, setSprinklerPipes] = useState(false);
  const [sprinklerTreated, setSprinklerTreated] = useState(false);
  const [penetratingSlabs, setPenetratingSlabs] = useState(false);
  const [certifiedFireCollar, setCertifiedFireCollar] = useState(false);
  const [MarkModel, setMarkModel] = useState(false);
  const [AcPenetrations, setAcPenetrations] = useState(false);
  const [AcTreated, setAcTreated] = useState(false);
  const [photoCheck, setPhotoCheck] = useState(false);

  const id = props.route.params.id;
  useEffect(() => {
    Alert.alert(
      "Warning",
      "Make sure check all Check items before this IPT!.",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
          style: "cancel",
        },
        {
          text: "Cancel",
          onPress: () => props.navigation.popToTop(),
        },
      ]
    );
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
  const sendEmail = () => {
    setIsLoading(true);
    axios
      .post(
        `${serverClient}/api/v1/checklist/${checkList?.[0]._id}/fire/send`,
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
  const updateDate = {
    water: [
      {
        bathroom: [
          {
            workmanship: checkList?.water?.[0].bathroom?.[0].workmanship,
            blueBoard: checkList?.water?.[0].bathroom?.[0].blueBoard,
            flexibleSealantAllJoint:
              checkList?.water?.[0].bathroom?.[0].flexibleSealantAllJoint,
            flexibleSealantAllAngle:
              checkList?.water?.[0].bathroom?.[0].flexibleSealantAllAngle,
            flexibleSealantAllPipe:
              checkList?.water?.[0].bathroom?.[0].flexibleSealantAllPipe,
            primerBeenFloorWall:
              checkList?.water?.[0].bathroom?.[0].primerBeenFloorWall,
            primerBeenAngle:
              checkList?.water?.[0].bathroom?.[0].primerBeenAngle,
            pipe: checkList?.water?.[0].bathroom?.[0].pipe,
            angle: checkList?.water?.[0].bathroom?.[0].angle,
            twoCoatsFloor: checkList?.water?.[0].bathroom?.[0].twoCoatsFloor,
            twoCoatsWall: checkList?.water?.[0].bathroom?.[0].twoCoatsWall,
            showerWall: checkList?.water?.[0].bathroom?.[0].showerWall,
            showerHeight: checkList?.water?.[0].bathroom?.[0].showerHeight,
            showerOutside: checkList?.water?.[0].bathroom?.[0].showerOutside,
            basinWall: checkList?.water?.[0].bathroom?.[0].basinWall,
            floodTest: checkList?.water?.[0].bathroom?.[0].floodTest,
            photoCheck: checkList?.water?.[0].bathroom?.[0].photoCheck,
          },
        ],
        ensuite: [
          {
            workmanship: checkList?.water?.[0].ensuite?.[0].workmanship,
            blueBoard: checkList?.water?.[0].ensuite?.[0].blueBoard,
            flexibleSealantAllJoint:
              checkList?.water?.[0].ensuite?.[0].flexibleSealantAllJoint,
            flexibleSealantAllAngle:
              checkList?.water?.[0].ensuite?.[0].flexibleSealantAllAngle,
            flexibleSealantAllPipe:
              checkList?.water?.[0].ensuite?.[0].flexibleSealantAllPipe,
            primerBeenFloorWall:
              checkList?.water?.[0].ensuite?.[0].primerBeenFloorWall,
            primerBeenAngle: checkList?.water?.[0].ensuite?.[0].primerBeenAngle,
            pipe: checkList?.water?.[0].ensuite?.[0].pipe,
            angle: checkList?.water?.[0].ensuite?.[0].angle,
            twoCoatsFloor: checkList?.water?.[0].ensuite?.[0].twoCoatsFloor,
            twoCoatsWall: checkList?.water?.[0].ensuite?.[0].twoCoatsWall,
            showerWall: checkList?.water?.[0].ensuite?.[0].showerWall,
            showerHeight: checkList?.water?.[0].ensuite?.[0].showerHeight,
            showerOutside: checkList?.water?.[0].ensuite?.[0].showerOutside,
            basinWall: checkList?.water?.[0].ensuite?.[0].basinWall,
            floodTest: checkList?.water?.[0].ensuite?.[0].floodTest,
            photoCheck: checkList?.water?.[0].ensuite?.[0].photoCheck,
          },
        ],
        laundry: [
          {
            workmanship: checkList?.water?.[0].laundry?.[0].workmanship,
            blueBoard: checkList?.water?.[0].laundry?.[0].blueBoard,
            flexibleSealantAllJoint:
              checkList?.water?.[0].laundry?.[0].flexibleSealantAllJoint,
            flexibleSealantAllAngle:
              checkList?.water?.[0].laundry?.[0].flexibleSealantAllAngle,
            flexibleSealantAllPipe:
              checkList?.water?.[0].laundry?.[0].flexibleSealantAllPipe,
            primerBeenFloorWall:
              checkList?.water?.[0].laundry?.[0].primerBeenFloorWall,
            primerBeenAngle: checkList?.water?.[0].laundry?.[0].primerBeenAngle,
            pipe: checkList?.water?.[0].laundry?.[0].pipe,
            angle: checkList?.water?.[0].laundry?.[0].angle,
            twoCoatsFloor: checkList?.water?.[0].laundry?.[0].twoCoatsFloor,
            twoCoatsWall: checkList?.water?.[0].laundry?.[0].twoCoatsWall,
            Wall: checkList?.water?.[0].laundry?.[0].Wall,
            showerOutside: checkList?.water?.[0].laundry?.[0].showerOutside,
            laundryWall: checkList?.water?.[0].laundry?.[0].laundryWall,
            floodTest: checkList?.water?.[0].laundry?.[0].floodTest,
            photoCheck: checkList?.water?.[0].laundry?.[0].photoCheck,
          },
        ],
        balcony: [
          {
            workmanship: checkList?.water?.[0].balcony?.[0].workmanship,
            doorHob: checkList?.water?.[0].balcony?.[0].doorHob,
            flexibleSealant: checkList?.water?.[0].balcony?.[0].flexibleSealant,
            primerBeen: checkList?.water?.[0].balcony?.[0].primerBeen,
            twoCoats: checkList?.water?.[0].balcony?.[0].twoCoats,
            wall: checkList?.water?.[0].balcony?.[0].wall,
            photoCheck: checkList?.water?.[0].balcony?.[0].photoCheck,
          },
        ],
      },
    ],
    fire: [
      {
        electric: electric,
        plumbing: plumbing,
        dryFireRoughIn: dryFireRoughIn,
        sprinklerRoughIn: sprinklerRoughIn,
        acRoughIn: acRoughIn,
        plywoodSupports: plywoodSupports,
        windowDoorAngle: windowDoorAngle,
        HebelWalls: HebelWalls,
        hebelCompliant: hebelCompliant,
        flexibleSealant: flexibleSealant,
        SpecifySealant: SpecifySealant,
        InspectConcrete: InspectConcrete,
        frontFireRate: frontFireRate,
        pvc: pvc,
        treated: treated,
        penetratingCables: penetratingCables,
        strippedThroughTheWall: strippedThroughTheWall,
        cables: cables,
        sprinklerPipes: sprinklerPipes,
        sprinklerTreated: sprinklerTreated,
        penetratingSlabs: penetratingSlabs,
        certifiedFireCollar: certifiedFireCollar,
        MarkModel: MarkModel,
        AcPenetrations: AcPenetrations,
        AcTreated: AcTreated,
        photoCheck: photoCheck,
      },
    ],
    unit: props.route.params.unit._id,
    building: props.route.params.unit.building,
  };
  const updateHandle = () => {
    axios
      .put(`${serverClient}/api/v1/checklist/${checkList?.[0]._id}`, updateDate)
      .then((response) => {
        Alert.alert("Data updated!");
        setShowModel(true);
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
  };
  const toggleElectric = () => {
    setElectric(!electric);
  };
  const togglePlumbing = () => {
    setPlumbing(!plumbing);
  };
  const toggleDryFireRoughIn = () => {
    setDryFireRoughIn(!dryFireRoughIn);
  };
  const toggleSprinklerRoughIn = () => {
    setSprinklerRoughIn(!sprinklerRoughIn);
  };
  const toggleAcRoughIn = () => {
    setAcRoughIn(!acRoughIn);
  };
  const togglePlywoodSupports = () => {
    setPlywoodSupports(!plywoodSupports);
  };
  const toggleWindowDoorAngle = () => {
    setWindowDoorAngle(!windowDoorAngle);
  };
  const toggleHebelWalls = () => {
    setHebelWalls(!HebelWalls);
  };
  const toggleHebelCompliant = () => {
    setHebelCompliant(!hebelCompliant);
  };
  const toggleFlexibleSealant = () => {
    setFlexibleSealant(!flexibleSealant);
  };
  const toggleSpecifySealant = () => {
    setSpecifySealant(!SpecifySealant);
  };
  const toggleInspectConcrete = () => {
    setInspectConcrete(!InspectConcrete);
  };
  const toggleFrontFireRate = () => {
    setFrontFireRate(!frontFireRate);
  };
  const togglePvc = () => {
    setPvc(!pvc);
  };
  const toggleTreated = () => {
    setTreated(!treated);
  };
  const togglePenetratingCables = () => {
    setPenetratingCables(!penetratingCables);
  };
  const toggleStrippedThroughTheWall = () => {
    setStrippedThroughTheWall(!strippedThroughTheWall);
  };
  const toggleCables = () => {
    setCables(!cables);
  };
  const toggleSprinklerPipes = () => {
    setSprinklerPipes(!sprinklerPipes);
  };
  const toggleSprinklerTreated = () => {
    setSprinklerTreated(!sprinklerTreated);
  };
  const togglePenetratingSlabs = () => {
    setPenetratingSlabs(!penetratingSlabs);
  };
  const toggleCertifiedFireCollar = () => {
    setCertifiedFireCollar(!certifiedFireCollar);
  };
  const toggleMarkModel = () => {
    setMarkModel(!MarkModel);
  };
  const toggleAcPenetrations = () => {
    setAcPenetrations(!AcPenetrations);
  };
  const toggleAcTreated = () => {
    setAcTreated(!AcTreated);
  };
  const togglePhotoCheck = () => {
    setPhotoCheck(!photoCheck);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#36393e" }}>
      <View style={styles.view1}>
        <Text style={styles.componentHeader}>ITP</Text>
      </View>
      <Animatable.View animation="bounceInUp" style={styles.view2}>
        <Text style={styles.componentTitle}>
          Unit Number: {props.route.params.unit.unitNumber}
        </Text>
        <ScrollView>
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
                <Text
                  style={{
                    justifyContent: "center",
                    textAlign: "center",
                    fontSize: "24",
                    fontWeight: "500",
                    marginBottom: 20,
                  }}
                >
                  ITP -Intertenancy Walls
                </Text>
                <Text>Is the electrical rough-in finished?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={electric}
                  onValueChange={toggleElectric}
                />
                <Text>Is the plumbing rough-in finished?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={plumbing}
                  onValueChange={togglePlumbing}
                />
                <Text>Is the dry fire rough-in finished?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={dryFireRoughIn}
                  onValueChange={toggleDryFireRoughIn}
                />
                <Text>Is the sprinkler rough-in finished?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={sprinklerRoughIn}
                  onValueChange={toggleSprinklerRoughIn}
                />
                <Text>Is the mechanical / ac rough-in finished?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={acRoughIn}
                  onValueChange={toggleAcRoughIn}
                />
                <Text>Is the plywood supports installed?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={plywoodSupports}
                  onValueChange={togglePlywoodSupports}
                />
                <Text>
                  Are all the windows and doors internally sealed and angles
                  installed
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={windowDoorAngle}
                  onValueChange={toggleWindowDoorAngle}
                />
                <Text>
                  Undertake a physical inspection of the entire Hebel walls and
                  inspect for any holes, cracks, Breaks or fire rating issues to
                  panels.
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={HebelWalls}
                  onValueChange={toggleHebelWalls}
                />
                <Text>Is the hebel compliant?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={hebelCompliant}
                  onValueChange={toggleHebelCompliant}
                />
                <Text>
                  Are all joints between hebel and different wall systems sealed
                  with a flexible Sealant?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={flexibleSealant}
                  onValueChange={toggleFlexibleSealant}
                />
                <Text>Specify Sealant</Text>
                <FormSwitch
                  data={[true, false]}
                  value={SpecifySealant}
                  onValueChange={toggleSpecifySealant}
                />
                <Text>
                  Inspect concrete walls and ensure there is no penetrations or
                  infilled core tie holes?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={InspectConcrete}
                  onValueChange={toggleInspectConcrete}
                />
                <Text>
                  Ensure the front fire rated door has been core filled?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={frontFireRate}
                  onValueChange={toggleFrontFireRate}
                />
                <Text>
                  Are there any pvc penetrations through intertenancy walls?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={pvc}
                  onValueChange={togglePvc}
                />
                <Text>If so how have they been treated?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={treated}
                  onValueChange={toggleTreated}
                />
                <Text>Are there any penetrating cables?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={penetratingCables}
                  onValueChange={togglePenetratingCables}
                />
                <Text>Has the conduit been stripped through the wall?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={strippedThroughTheWall}
                  onValueChange={toggleStrippedThroughTheWall}
                />
                <Text>How have the cables been treated?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={cables}
                  onValueChange={toggleCables}
                />
                <Text>
                  Are there any sprinkler pipes penetrating intertenancy walls?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={sprinklerPipes}
                  onValueChange={toggleSprinklerPipes}
                />
                <Text>How have they been treated?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={sprinklerTreated}
                  onValueChange={toggleSprinklerTreated}
                />
                <Text>Are there any service penetrating slabs?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={penetratingSlabs}
                  onValueChange={togglePenetratingSlabs}
                />
                <Text>
                  Have they been treated with a certified fire collar?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={certifiedFireCollar}
                  onValueChange={toggleCertifiedFireCollar}
                />
                <Text>Specify the make and model?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={MarkModel}
                  onValueChange={toggleMarkModel}
                />
                <Text>
                  Are there any mechanical / air conditioning penetrations?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={AcPenetrations}
                  onValueChange={toggleAcPenetrations}
                />
                <Text>If so how have they been treated?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={AcTreated}
                  onValueChange={toggleAcTreated}
                />
                <Text>Have photographic evidence been take of the unit</Text>
                <FormSwitch
                  data={[true, false]}
                  value={photoCheck}
                  onValueChange={togglePhotoCheck}
                />
                <FormButton text="Update" onPress={updateHandle} />
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
              </View>
            </>
          )}
        </ScrollView>
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
