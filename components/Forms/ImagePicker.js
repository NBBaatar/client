import { StyleSheet, Text, View, Pressable, Alert, Image } from "react-native";
import React from "react";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import Feather from "react-native-vector-icons/Feather";
export default (props) => {
  const [pickedImage, setPickedImage] = React.useState();
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (!result.status === "granted") {
      Alert.alert("Warning", "Permission not granted.", [{ text: "OK" }]);
    }
    return true;
  };
  const takeImage = async () => {
    const hasPermissions = verifyPermissions();
    if (!hasPermissions) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    // console.log(image.assets[0].uri);
    setPickedImage(image.assets[0].uri);
    props.setSelectedImage(image.assets[0].uri);
  };
  return (
    <View style={styles.main}>
      <View style={styles.image}>
        {pickedImage ? (
          <Image
            style={{
              width: "100%",
              height: "100%",
              borderRadius: 15,
              borderWidth: 1,
            }}
            source={{ uri: pickedImage }}
          />
        ) : (
          <Text>No image attached</Text>
        )}
      </View>

      <View>
        <Pressable style={styles.button} onPress={takeImage}>
          <Text style={styles.text_button}>
            <Feather name="camera" size={20} color="#fff" />
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    marginBottom: 15,
  },
  image: {
    width: "90%",
    height: 200,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 15,
  },
  text_button: {
    color: "white",
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 60,
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
});
