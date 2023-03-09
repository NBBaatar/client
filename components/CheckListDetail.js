import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
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
const CheckListDetail = (props) => {
  const [checkList, setCheckList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModel, setShowModel] = useState(false);
  const [email, setEmail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [waterWorkship, setWaterWorkShip] = useState(false);
  const [waterBlueBoard, setWaterBlueBoard] = useState(false);
  const [waterPrimerBeenFloorWall, setWaterPrimerBeenFloorWall] =
    useState(false);
  const [waterFlexibleSealantAllJoint, setWaterFlexibleSealantAllJoint] =
    useState(false);
  const [waterPrimerBeenAngle, setWaterPrimerBeenAngle] = useState(false);
  const [waterflexibleSealantAllAngle, setWaterflexibleSealantAllAngle] =
    useState(false);
  const [waterFlexibleSealantAllPipe, setWaterFlexibleSealantAllPipe] =
    useState(false);
  const [waterPipe, setWaterPipe] = useState(false);
  const [waterAngle, setWaterAngle] = useState(false);
  const [waterTwoCoatsFloor, setWaterTwoCoatsFloor] = useState(false);
  const [waterTwoCoatsWall, setWaterTwoCoatsWall] = useState(false);
  const [waterShowerWall, setWaterShowerWall] = useState(false);
  const [waterShowerHeight, setWaterShowerHeight] = useState(false);
  const [waterShowerOutside, setWaterShowerOutside] = useState(false);
  const [waterBasinWall, setWaterBasinWall] = useState(false);
  const [waterFloodTest, setWaterFloodTest] = useState(false);
  const [waterPhotoCheck, setWaterPhotoCheck] = useState(false);
  //Ensuite States
  const [waterWorkshipEnsuit, setWaterWorkShipEnsuit] = useState(false);
  const [waterBlueBoardEnsuit, setWaterBlueBoardEnsuit] = useState(false);
  const [waterPrimerBeenFloorWallEnsuit, setWaterPrimerBeenFloorWallEnsuit] =
    useState(false);
  const [
    waterFlexibleSealantAllJointEnsuit,
    setWaterFlexibleSealantAllJointEnsuit,
  ] = useState(false);
  const [waterPrimerBeenAngleEnsuit, setWaterPrimerBeenAngleEnsuit] =
    useState(false);
  const [
    waterflexibleSealantAllAngleEnsuit,
    setWaterflexibleSealantAllAngleEnsuit,
  ] = useState(false);
  const [
    waterFlexibleSealantAllPipeEnsuit,
    setWaterFlexibleSealantAllPipeEnsuit,
  ] = useState(false);
  const [waterPipeEnsuit, setWaterPipeEnsuit] = useState(false);
  const [waterAngleEnsuit, setWaterAngleEnsuit] = useState(false);
  const [waterTwoCoatsFloorEnsuit, setWaterTwoCoatsFloorEnsuit] =
    useState(false);
  const [waterTwoCoatsWallEnsuit, setWaterTwoCoatsWallEnsuit] = useState(false);
  const [waterShowerWallEnsuit, setWaterShowerWallEnsuit] = useState(false);
  const [waterShowerHeightEnsuit, setWaterShowerHeightEnsuit] = useState(false);
  const [waterShowerOutsideEnsuit, setWaterShowerOutsideEnsuit] =
    useState(false);
  const [waterBasinWallEnsuit, setWaterBasinWallEnsuit] = useState(false);
  const [waterFloodTestEnsuit, setWaterFloodTestEnsuit] = useState(false);
  const [waterPhotoCheckEnsuit, setWaterPhotoCheckEnsuit] = useState(false);

  //Laundry states
  const [waterWorkshipLaundry, setWaterWorkShipLaundry] = useState(false);
  const [waterBlueBoardLaundry, setWaterBlueBoardLaundry] = useState(false);
  const [waterPrimerBeenFloorWallLaundry, setWaterPrimerBeenFloorWallLaundry] =
    useState(false);
  const [
    waterFlexibleSealantAllJointLaundry,
    setWaterFlexibleSealantAllJointLaundry,
  ] = useState(false);
  const [waterPrimerBeenAngleLaundry, setWaterPrimerBeenAngleLaundry] =
    useState(false);
  const [
    waterflexibleSealantAllAngleLaundry,
    setWaterflexibleSealantAllAngleLaundry,
  ] = useState(false);
  const [
    waterFlexibleSealantAllPipeLaundry,
    setWaterFlexibleSealantAllPipeLaundry,
  ] = useState(false);
  const [waterPipeLaundry, setWaterPipeLaundry] = useState(false);
  const [waterAngleLaundry, setWaterAngleLaundry] = useState(false);
  const [waterTwoCoatsFloorLaundry, setWaterTwoCoatsFloorLaundry] =
    useState(false);
  const [waterTwoCoatsWallLaundry, setWaterTwoCoatsWallLaundry] =
    useState(false);
  const [waterShowerWallLaundry, setWaterShowerWallLaundry] = useState(false);

  const [waterShowerOutsideLaundry, setWaterShowerOutsideLaundry] =
    useState(false);
  const [waterBasinWallLaundry, setWaterBasinWallLaundry] = useState(false);
  const [waterFloodTestLaundry, setWaterFloodTestLaundry] = useState(false);
  const [waterPhotoCheckLaundry, setWaterPhotoCheckLaundry] = useState(false);
  // Balcony states
  const [waterWorkshipBalcony, setWaterWorkShipBalcony] = useState(false);
  const [waterBlueBoardBalcony, setWaterBlueBoardBalcony] = useState(false);
  const [waterPrimerBeenFloorWallBalcony, setWaterPrimerBeenFloorWallBalcony] =
    useState(false);
  const [
    waterFlexibleSealantAllJointBalcony,
    setWaterFlexibleSealantAllJointBalcony,
  ] = useState(false);
  const [waterPrimerBeenAngleBalcony, setWaterPrimerBeenAngleBalcony] =
    useState(false);
  const [
    waterflexibleSealantAllAngleBalcony,
    setWaterflexibleSealantAllAngleBalcony,
  ] = useState(false);
  const [
    waterFlexibleSealantAllPipeBalcony,
    setWaterFlexibleSealantAllPipeBalcony,
  ] = useState(false);

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
        `${serverClient}/api/v1/checklist/${checkList?.[0]._id}/water/send`,
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
  const toggleWaterFlexibleSealantAllPipeBalcony = () => {
    setWaterFlexibleSealantAllPipeBalcony(!waterFlexibleSealantAllPipeBalcony);
  };
  const toggleWaterflexibleSealantAllAngleBalcony = () => {
    setWaterflexibleSealantAllAngleBalcony(
      !waterflexibleSealantAllAngleBalcony
    );
  };
  const toggleWaterPrimerBeenAngleBalcony = () => {
    setWaterPrimerBeenAngleBalcony(!waterPrimerBeenAngleBalcony);
  };
  const toggleWaterFlexibleSealantAllJointBalcony = () => {
    setWaterFlexibleSealantAllJointBalcony(
      !waterFlexibleSealantAllJointBalcony
    );
  };
  const toggleWaterPrimerBeenFloorWallBalcony = () => {
    setWaterPrimerBeenFloorWallBalcony(!waterPrimerBeenFloorWallBalcony);
  };
  const toggleWaterBlueBoardBalcony = () => {
    setWaterBlueBoardBalcony(!waterBlueBoardBalcony);
  };
  const toggleWaterWorkshipBalcony = () => {
    setWaterWorkShipBalcony(!waterWorkshipBalcony);
  };
  const toggleWaterPhotoCheck = () => {
    setWaterPhotoCheck(!waterPhotoCheck);
  };
  const toggleWaterFloodTest = () => {
    setWaterFloodTest(!waterFloodTest);
  };
  const toggleWaterBasinWall = () => {
    setWaterBasinWall(!waterBasinWall);
  };
  const toggleWaterShowerOutside = () => {
    setWaterShowerOutside(!waterShowerOutside);
  };
  const toggleWaterShowerHeight = () => {
    setWaterShowerHeight(!waterShowerHeight);
  };
  const toggleWaterShowerWall = () => {
    setWaterShowerWall(!waterShowerWall);
  };
  const toggleWaterTwoCoastWall = () => {
    setWaterTwoCoatsWall(!waterTwoCoatsWall);
  };
  const toggleWaterTwoCoastFloor = () => {
    setWaterTwoCoatsFloor(!waterTwoCoatsFloor);
  };
  const toggleWaterPipe = () => {
    setWaterPipe(!waterPipe);
  };
  const toggleWaterAngle = () => {
    setWaterAngle(!waterAngle);
  };
  const toggleFlexibleSealantAllPipe = () => {
    setWaterFlexibleSealantAllPipe(!waterFlexibleSealantAllPipe);
  };
  const toggleWorkmanship = () => {
    setWaterWorkShip(!waterWorkship);
  };
  const toggleflexibleSealantAllAngle = () => {
    setWaterflexibleSealantAllAngle(!waterflexibleSealantAllAngle);
  };
  const toggleBlueBoard = () => {
    setWaterBlueBoard(!waterBlueBoard);
  };
  const togglePrimerBeenFloorWall = () => {
    setWaterPrimerBeenFloorWall(!waterPrimerBeenFloorWall);
  };
  const toggleFlexibleSealantAllJoint = () => {
    setWaterFlexibleSealantAllJoint(!waterFlexibleSealantAllJoint);
  };
  const togglePrimerBeenAngle = () => {
    setWaterPrimerBeenAngle(!waterPrimerBeenAngle);
  };
  //Ensuite funtions
  const toggleWaterPhotoCheckEnsuit = () => {
    setWaterPhotoCheckEnsuit(!waterPhotoCheckEnsuit);
  };
  const toggleWaterFloodTestEnsuit = () => {
    setWaterFloodTestEnsuit(!waterFloodTestEnsuit);
  };
  const toggleWaterBasinWallEnsuit = () => {
    setWaterBasinWallEnsuit(!waterBasinWallEnsuit);
  };
  const toggleWaterShowerOutsideEnsuit = () => {
    setWaterShowerOutsideEnsuit(!waterShowerOutsideEnsuit);
  };
  const toggleWaterShowerHeightEnsuit = () => {
    setWaterShowerHeightEnsuit(!waterShowerHeightEnsuit);
  };
  const toggleWaterShowerWallEnsuit = () => {
    setWaterShowerWallEnsuit(!waterShowerWallEnsuit);
  };
  const toggleWaterTwoCoastWallEnsuit = () => {
    setWaterTwoCoatsWallEnsuit(!waterTwoCoatsWallEnsuit);
  };
  const toggleWaterTwoCoastFloorEnsuit = () => {
    setWaterTwoCoatsFloorEnsuit(!waterTwoCoatsFloorEnsuit);
  };
  const toggleWaterPipeEnsuit = () => {
    setWaterPipeEnsuit(!waterPipeEnsuit);
  };
  const toggleWaterAngleEnsuit = () => {
    setWaterAngleEnsuit(!waterAngleEnsuit);
  };
  const toggleFlexibleSealantAllPipeEnsuit = () => {
    setWaterFlexibleSealantAllPipeEnsuit(!waterFlexibleSealantAllPipeEnsuit);
  };
  const toggleWorkmanshipEnsuit = () => {
    setWaterWorkShipEnsuit(!waterWorkshipEnsuit);
  };
  const toggleflexibleSealantAllAngleEnsuit = () => {
    setWaterflexibleSealantAllAngleEnsuit(!waterflexibleSealantAllAngleEnsuit);
  };
  const toggleBlueBoardEnsuit = () => {
    setWaterBlueBoardEnsuit(!waterBlueBoardEnsuit);
  };
  const togglePrimerBeenFloorWallEnsuit = () => {
    setWaterPrimerBeenFloorWallEnsuit(!waterPrimerBeenFloorWallEnsuit);
  };
  const toggleFlexibleSealantAllJointEnsuit = () => {
    setWaterFlexibleSealantAllJointEnsuit(!waterFlexibleSealantAllJointEnsuit);
  };
  const togglePrimerBeenAngleEnsuit = () => {
    setWaterPrimerBeenAngleEnsuit(!waterPrimerBeenAngleEnsuit);
  };
  //Laundry functions
  const toggleWaterPhotoCheckLaundry = () => {
    setWaterPhotoCheckLaundry(!waterPhotoCheckLaundry);
  };
  const toggleWaterFloodTestLaundry = () => {
    setWaterFloodTestLaundry(!waterFloodTestLaundry);
  };
  const toggleWaterBasinWallLaundry = () => {
    setWaterBasinWallLaundry(!waterBasinWallLaundry);
  };
  const toggleWaterShowerOutsideLaundry = () => {
    setWaterShowerOutsideLaundry(!waterShowerOutsideLaundry);
  };
  const toggleWaterShowerWallLaundry = () => {
    setWaterShowerWallLaundry(!waterShowerWallLaundry);
  };
  const toggleWaterTwoCoastWallLaundry = () => {
    setWaterTwoCoatsWallLaundry(!waterTwoCoatsWallLaundry);
  };
  const toggleWaterTwoCoastFloorLaundry = () => {
    setWaterTwoCoatsFloorLaundry(!waterTwoCoatsFloorLaundry);
  };
  const toggleWaterPipeLaundry = () => {
    setWaterPipeLaundry(!waterPipeLaundry);
  };
  const toggleWaterAngleLaundry = () => {
    setWaterAngleLaundry(!waterAngleLaundry);
  };
  const toggleFlexibleSealantAllPipeLaundry = () => {
    setWaterFlexibleSealantAllPipeLaundry(!waterFlexibleSealantAllPipeLaundry);
  };
  const toggleWorkmanshipLaundry = () => {
    setWaterWorkShipLaundry(!waterWorkshipLaundry);
  };
  const toggleflexibleSealantAllAngleLaundry = () => {
    setWaterflexibleSealantAllAngleLaundry(
      !waterflexibleSealantAllAngleLaundry
    );
  };
  const toggleBlueBoardLaundry = () => {
    setWaterBlueBoardLaundry(!waterBlueBoardLaundry);
  };
  const togglePrimerBeenFloorWallLaundry = () => {
    setWaterPrimerBeenFloorWallLaundry(!waterPrimerBeenFloorWallLaundry);
  };
  const toggleFlexibleSealantAllJointLaundry = () => {
    setWaterFlexibleSealantAllJointLaundry(
      !waterFlexibleSealantAllJointLaundry
    );
  };
  const togglePrimerBeenAngleLaundry = () => {
    setWaterPrimerBeenAngleLaundry(!waterPrimerBeenAngleLaundry);
  };

  const updateDate = {
    water: [
      {
        bathroom: [
          {
            workmanship: waterWorkship,
            blueBoard: waterBlueBoard,
            flexibleSealantAllJoint: waterFlexibleSealantAllJoint,
            flexibleSealantAllAngle: waterflexibleSealantAllAngle,
            flexibleSealantAllPipe: waterFlexibleSealantAllPipe,
            primerBeenFloorWall: waterPrimerBeenFloorWall,
            primerBeenAngle: waterPrimerBeenAngle,
            pipe: waterPipe,
            angle: waterAngle,
            twoCoatsFloor: waterTwoCoatsFloor,
            twoCoatsWall: waterTwoCoatsWall,
            showerWall: waterShowerWall,
            showerHeight: waterShowerHeight,
            showerOutside: waterShowerOutside,
            basinWall: waterBasinWall,
            floodTest: waterFloodTest,
            photoCheck: waterPhotoCheck,
          },
        ],
        ensuite: [
          {
            workmanship: waterWorkshipEnsuit,
            blueBoard: waterBlueBoardEnsuit,
            flexibleSealantAllJoint: waterFlexibleSealantAllJointEnsuit,
            flexibleSealantAllAngle: waterflexibleSealantAllAngleEnsuit,
            flexibleSealantAllPipe: waterFlexibleSealantAllPipeEnsuit,
            primerBeenFloorWall: waterPrimerBeenFloorWallEnsuit,
            primerBeenAngle: waterPrimerBeenAngleEnsuit,
            pipe: waterPipeEnsuit,
            angle: waterAngleEnsuit,
            twoCoatsFloor: waterTwoCoatsFloorEnsuit,
            twoCoatsWall: waterTwoCoatsWallEnsuit,
            showerWall: waterShowerWallEnsuit,
            showerHeight: waterShowerHeightEnsuit,
            showerOutside: waterShowerOutsideEnsuit,
            basinWall: waterBasinWallEnsuit,
            floodTest: waterFloodTestEnsuit,
            photoCheck: waterPhotoCheckEnsuit,
          },
        ],
        laundry: [
          {
            workmanship: waterWorkshipLaundry,
            blueBoard: waterBlueBoardLaundry,
            flexibleSealantAllJoint: waterFlexibleSealantAllJointLaundry,
            flexibleSealantAllAngle: waterflexibleSealantAllAngleLaundry,
            flexibleSealantAllPipe: waterFlexibleSealantAllPipeLaundry,
            primerBeenFloorWall: waterPrimerBeenFloorWallLaundry,
            primerBeenAngle: waterPrimerBeenAngleLaundry,
            pipe: waterPipeLaundry,
            angle: waterAngleLaundry,
            twoCoatsFloor: waterTwoCoatsFloorLaundry,
            twoCoatsWall: waterTwoCoatsWallLaundry,
            Wall: waterShowerWallLaundry,
            showerOutside: waterShowerOutsideLaundry,
            laundryWall: waterBasinWallLaundry,
            floodTest: waterFloodTestLaundry,
            photoCheck: waterPhotoCheckLaundry,
          },
        ],
        balcony: [
          {
            workmanship: waterWorkshipBalcony,
            doorHob: waterBlueBoardBalcony,
            flexibleSealant: waterPrimerBeenFloorWallBalcony,
            primerBeen: waterFlexibleSealantAllJointBalcony,
            twoCoats: waterPrimerBeenAngleBalcony,
            wall: waterflexibleSealantAllAngleBalcony,
            photoCheck: waterFlexibleSealantAllPipeBalcony,
          },
        ],
      },
    ],
    fire: [
      {
        electric: checkList?.fire?.[0].electric,
        plumbing: checkList?.fire?.[0].plumbing,
        dryFireRoughIn: checkList?.fire?.[0].dryFireRoughIn,
        sprinklerRoughIn: checkList?.fire?.[0].sprinklerRoughIn,
        acRoughIn: checkList?.fire?.[0].acRoughIn,
        plywoodSupports: checkList?.fire?.[0].plywoodSupports,
        windowDoorAngle: checkList?.fire?.[0].windowDoorAngle,
        HebelWalls: checkList?.fire?.[0].HebelWalls,
        hebelCompliant: checkList?.fire?.[0].hebelCompliant,
        flexibleSealant: checkList?.fire?.[0].flexibleSealant,
        SpecifySealant: checkList?.fire?.[0].SpecifySealant,
        InspectConcrete: checkList?.fire?.[0].InspectConcrete,
        frontFireRate: checkList?.fire?.[0].frontFireRate,
        pvc: checkList?.fire?.[0].pvc,
        treated: checkList?.fire?.[0].treated,
        penetratingCables: checkList?.fire?.[0].penetratingCables,
        strippedThroughTheWall: checkList?.fire?.[0].strippedThroughTheWall,
        cables: checkList?.fire?.[0].cables,
        sprinklerPipes: checkList?.fire?.[0].sprinklerPipes,
        sprinklerTreated: checkList?.fire?.[0].sprinklerTreated,
        penetratingSlabs: checkList?.fire?.[0].penetratingSlabs,
        certifiedFireCollar: checkList?.fire?.[0].certifiedFireCollar,
        MarkModel: checkList?.fire?.[0].MarkModel,
        AcPenetrations: checkList?.fire?.[0].AcPenetrations,
        AcTreated: checkList?.fire?.[0].AcTreated,
        photoCheck: checkList?.fire?.[0].photoCheck,
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
        // props.navigation.popToTop();
      })
      .catch((err) => {
        Alert.alert(err.message);
      });
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
                  Wet Area: Bathroom
                </Text>
                <Text>
                  Conduct a physical inspection of the workmanship, Are there
                  any visible defects or holes?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterWorkship}
                  onValueChange={toggleWorkmanship}
                />
                <Text>
                  Has the blue board stopped 10mm short off the floor for
                  movement?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterBlueBoard}
                  onValueChange={toggleBlueBoard}
                />
                <Text>Has a flexible sealant been applied to all joints?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFlexibleSealantAllJoint}
                  onValueChange={toggleFlexibleSealantAllJoint}
                />
                <Text>Has a primer been applied to the floor and walls?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPrimerBeenFloorWall}
                  onValueChange={togglePrimerBeenFloorWall}
                />
                <Text>
                  Has a primer been applied to the angle as per specified
                  instructions?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPrimerBeenAngle}
                  onValueChange={togglePrimerBeenAngle}
                />
                <Text>
                  Has flexible sealant been applied to the aluminium angle?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterflexibleSealantAllAngle}
                  onValueChange={toggleflexibleSealantAllAngle}
                />
                <Text>
                  Has a flexible sealant been applied around all penetrating
                  pipes?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFlexibleSealantAllPipe}
                  onValueChange={toggleFlexibleSealantAllPipe}
                />
                <Text>Has a pipe flange been installed?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPipe}
                  onValueChange={toggleWaterPipe}
                />
                <Text>
                  Is the angle installed before the door to keep the door frame
                  out of the wet area?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterAngle}
                  onValueChange={toggleWaterAngle}
                />
                <Text>
                  Have two coats of waterproof been applied to the floor?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterTwoCoatsFloor}
                  onValueChange={toggleWaterTwoCoastFloor}
                />
                <Text>
                  Have two coats of waterproof been applied to the walls?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterTwoCoatsWall}
                  onValueChange={toggleWaterTwoCoastWall}
                />
                <Text>
                  Has the entire shower recess walls been covered with
                  waterproof?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterShowerWall}
                  onValueChange={toggleWaterShowerWall}
                />
                <Text>
                  Has the shower waterproof been applied to a minimum height of
                  1900mm?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterShowerHeight}
                  onValueChange={toggleWaterShowerHeight}
                />
                <Text>
                  Has the waterproof to the walls outside the shower been
                  applied to a minimum height of 150mm?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterShowerOutside}
                  onValueChange={toggleWaterShowerOutside}
                />
                <Text>Has the waterproof been applied to the basin wall?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterBasinWall}
                  onValueChange={toggleWaterBasinWall}
                />
                <Text>
                  Has a 24 hr waterproof flood test been completed? Certify it
                  is holding water?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFloodTest}
                  onValueChange={toggleWaterFloodTest}
                />
                <Text>
                  Have photographic evidence been taken of the wet area
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPhotoCheck}
                  onValueChange={toggleWaterPhotoCheck}
                />
              </View>
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
                  Wet Area: Ensuite
                </Text>
                <Text>
                  Conduct a physical inspection of the workmanship, Are there
                  any visible defects or holes?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterWorkshipEnsuit}
                  onValueChange={toggleWorkmanshipEnsuit}
                />
                <Text>
                  Has the blue board stopped 10mm short off the floor for
                  movement?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterBlueBoardEnsuit}
                  onValueChange={toggleBlueBoardEnsuit}
                />
                <Text>Has a flexible sealant been applied to all joints?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFlexibleSealantAllJointEnsuit}
                  onValueChange={toggleFlexibleSealantAllJointEnsuit}
                />
                <Text>Has a primer been applied to the floor and walls?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPrimerBeenFloorWallEnsuit}
                  onValueChange={togglePrimerBeenFloorWallEnsuit}
                />
                <Text>
                  Has a primer been applied to the angle as per specified
                  instructions?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPrimerBeenAngleEnsuit}
                  onValueChange={togglePrimerBeenAngleEnsuit}
                />
                <Text>
                  Has flexible sealant been applied to the aluminium angle?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterflexibleSealantAllAngleEnsuit}
                  onValueChange={toggleflexibleSealantAllAngleEnsuit}
                />
                <Text>
                  Has a flexible sealant been applied around all penetrating
                  pipes?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFlexibleSealantAllPipeEnsuit}
                  onValueChange={toggleFlexibleSealantAllPipeEnsuit}
                />
                <Text>Has a pipe flange been installed?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPipeEnsuit}
                  onValueChange={toggleWaterPipeEnsuit}
                />
                <Text>
                  Is the angle installed before the door to keep the door frame
                  out of the wet area?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterAngleEnsuit}
                  onValueChange={toggleWaterAngleEnsuit}
                />
                <Text>
                  Have two coats of waterproof been applied to the floor?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterTwoCoatsFloorEnsuit}
                  onValueChange={toggleWaterTwoCoastFloorEnsuit}
                />
                <Text>
                  Have two coats of waterproof been applied to the walls?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterTwoCoatsWallEnsuit}
                  onValueChange={toggleWaterTwoCoastWallEnsuit}
                />
                <Text>
                  Has the entire shower recess walls been covered with
                  waterproof?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterShowerWallEnsuit}
                  onValueChange={toggleWaterShowerWallEnsuit}
                />
                <Text>
                  Has the shower waterproof been applied to a minimum height of
                  1900mm?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterShowerHeightEnsuit}
                  onValueChange={toggleWaterShowerHeightEnsuit}
                />
                <Text>
                  Has the waterproof to the walls outside the shower been
                  applied to a minimum height of 150mm?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterShowerOutsideEnsuit}
                  onValueChange={toggleWaterShowerOutsideEnsuit}
                />
                <Text>Has the waterproof been applied to the basin wall?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterBasinWallEnsuit}
                  onValueChange={toggleWaterBasinWallEnsuit}
                />
                <Text>
                  Has a 24 hr waterproof flood test been completed? Certify it
                  is holding water?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFloodTestEnsuit}
                  onValueChange={toggleWaterFloodTestEnsuit}
                />
                <Text>
                  Have photographic evidence been taken of the wet area
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPhotoCheckEnsuit}
                  onValueChange={toggleWaterPhotoCheckEnsuit}
                />
              </View>
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
                  Wet Area: Laundry
                </Text>
                <Text>
                  Conduct a physical inspection of the workmanship, Are there
                  any visible defects or holes?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterWorkshipLaundry}
                  onValueChange={toggleWorkmanshipLaundry}
                />
                <Text>
                  Has the blue board stopped 10mm short off the floor for
                  movement?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterBlueBoardLaundry}
                  onValueChange={toggleBlueBoardLaundry}
                />
                <Text>Has a flexible sealant been applied to all joints?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFlexibleSealantAllJointLaundry}
                  onValueChange={toggleFlexibleSealantAllJointLaundry}
                />
                <Text>Has a primer been applied to the floor and walls?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPrimerBeenFloorWallLaundry}
                  onValueChange={togglePrimerBeenFloorWallLaundry}
                />
                <Text>
                  Has a primer been applied to the angle as per specified
                  instructions?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPrimerBeenAngleLaundry}
                  onValueChange={togglePrimerBeenAngleLaundry}
                />
                <Text>
                  Has flexible sealant been applied to the aluminium angle?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterflexibleSealantAllAngleLaundry}
                  onValueChange={toggleflexibleSealantAllAngleLaundry}
                />
                <Text>
                  Has a flexible sealant been applied around all penetrating
                  pipes?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFlexibleSealantAllPipeLaundry}
                  onValueChange={toggleFlexibleSealantAllPipeLaundry}
                />
                <Text>Has a pipe flange been installed?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPipeLaundry}
                  onValueChange={toggleWaterPipeLaundry}
                />
                <Text>
                  Is the angle installed before the door to keep the door frame
                  out of the wet area?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterAngleLaundry}
                  onValueChange={toggleWaterAngleLaundry}
                />
                <Text>
                  Have two coats of waterproof been applied to the floor?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterTwoCoatsFloorLaundry}
                  onValueChange={toggleWaterTwoCoastFloorLaundry}
                />
                <Text>
                  Have two coats of waterproof been applied to the walls?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterTwoCoatsWallLaundry}
                  onValueChange={toggleWaterTwoCoastWallLaundry}
                />
                <Text>
                  Has the entire shower recess walls been covered with
                  waterproof?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterShowerWallLaundry}
                  onValueChange={toggleWaterShowerWallLaundry}
                />
                <Text>
                  Has the waterproof to the walls outside the shower been
                  applied to a minimum height of 150mm?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterShowerOutsideLaundry}
                  onValueChange={toggleWaterShowerOutsideLaundry}
                />
                <Text>Has the waterproof been applied to the basin wall?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterBasinWallLaundry}
                  onValueChange={toggleWaterBasinWallLaundry}
                />
                <Text>
                  Has a 24 hr waterproof flood test been completed? Certify it
                  is holding water?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFloodTestLaundry}
                  onValueChange={toggleWaterFloodTestLaundry}
                />
                <Text>
                  Have photographic evidence been taken of the wet area
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPhotoCheckLaundry}
                  onValueChange={toggleWaterPhotoCheckLaundry}
                />
              </View>
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
                  Wet Area: Balcony
                </Text>
                <Text>
                  Conduct a physical inspection of the workmanship, Are there
                  any visible defects or holes?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterWorkshipBalcony}
                  onValueChange={toggleWaterWorkshipBalcony}
                />
                <Text>
                  Has the sliding door hob been waterproofed prior to the door
                  being installed?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterBlueBoardBalcony}
                  onValueChange={toggleWaterBlueBoardBalcony}
                />
                <Text>Has a flexible sealant been applied to all joints?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPrimerBeenFloorWallBalcony}
                  onValueChange={toggleWaterPrimerBeenFloorWallBalcony}
                />
                <Text>Has a primer been applied to the floor?</Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFlexibleSealantAllJointBalcony}
                  onValueChange={toggleWaterFlexibleSealantAllJointBalcony}
                />
                <Text>
                  Has two coats of waterproofing been applied to the floor?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterPrimerBeenAngleBalcony}
                  onValueChange={toggleWaterPrimerBeenAngleBalcony}
                />
                <Text>
                  Has the waterproof been turned up the wall by a minimum of 150
                  mm?
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterflexibleSealantAllAngleBalcony}
                  onValueChange={toggleWaterflexibleSealantAllAngleBalcony}
                />
                <Text>
                  Have photographic evidence been taken of the wet area
                </Text>
                <FormSwitch
                  data={[true, false]}
                  value={waterFlexibleSealantAllPipeBalcony}
                  onValueChange={toggleWaterFlexibleSealantAllPipeBalcony}
                />
              </View>
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
            </>
          )}
        </ScrollView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default CheckListDetail;

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
