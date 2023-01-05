import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, Text, StyleSheet, Pressable, ScrollView } from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import { serverClient } from "../Constant";
let user = "Baataraa";
let totalProjects = 11;
let totalBuildings = 123;
let totallUnits = 1290;

function Home({ navigation }) {
  const [projects, setProjects] = useState({});
  const [buildings, setBuildings] = useState([]);
  const [units, setUnits] = useState([]);
  const [user, setUser] = useState([]);
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/projects`)
      .then((response) => {
        setProjects(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/buildings`)
      .then((response) => {
        setBuildings(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  useEffect(() => {
    axios
      .get(`${serverClient}/api/v1/units`)
      .then((response) => {
        setUnits(response.data);
      })
      .catch((err) => console.log(err.response));
  }, []);

  return (
    <View style={styles.center}>
      {user && (
        <Text style={{ marginBottom: "2%", fontWeight: "bold", fontSize: 20 }}>
          Hello. How are you?: {user}!!
        </Text>
      )}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 5,
          marginHorizontal: 10,
          paddingVertical: 8,
          paddingHorizontal: 16,
        }}
      >
        <ScrollView
          horizontal
          style={{
            paddingTop: 45,
            paddingLeft: 20,
            paddingBottom: 45,
            marginBottom: 45,
            marginTop: 45,
          }}
        >
          <View
            style={{
              paddingHorizontal: 3,
              marginHorizontal: 5,
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <Card>
              <Card.Title
                style={{ width: 250, height: 150, justifyContent: "center" }}
                title="All Projects"
                subtitle={projects.count}
                left={(props) => (
                  <Avatar.Icon {...props} icon="clipboard-file" />
                )}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon="chevron-right"
                    onPress={() => {
                      navigation.navigate("Project");
                    }}
                  />
                )}
              />
            </Card>
          </View>
          <View
            style={{
              paddingHorizontal: 3,
              marginHorizontal: 5,
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <Card>
              <Card.Title
                style={{ width: 250, height: 150, justifyContent: "center" }}
                title="All Buildings"
                subtitle={buildings.count}
                left={(props) => <Avatar.Icon {...props} icon="domain" />}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon="chevron-right"
                    onPress={() => {
                      navigation.navigate("Building");
                    }}
                  />
                )}
              />
            </Card>
          </View>
          <View
            style={{
              paddingHorizontal: 3,
              marginHorizontal: 5,
              marginBottom: 5,
              marginTop: 5,
            }}
          >
            <Card>
              <Card.Title
                style={{ width: 250, height: 150, justifyContent: "center" }}
                title="All Units"
                subtitle={units.count}
                left={(props) => (
                  <Avatar.Icon {...props} icon="office-building-marker" />
                )}
                right={(props) => (
                  <IconButton
                    {...props}
                    icon="chevron-right"
                    onPress={() => {
                      alert("You Pressed Units!!!");
                    }}
                  />
                )}
              />
            </Card>
          </View>
        </ScrollView>
      </View>

      <Pressable
        style={styles.button}
        title="Check List"
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text_button}>Go to check list</Text>
      </Pressable>
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    marginTop: "5%",
    marginLeft: "5%",
    // justifyContent: "center",
    // alignItems: "center",
    // textAlign: "center",
  },
  text_button: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.5,
    color: "white",
  },
  button: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    height: 50,
    width: 275,
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
  paragraph: {
    fontSize: 14,
    padding: 20,
  },
});
