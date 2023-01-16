import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Avatar, Card, IconButton } from "react-native-paper";
import { serverClient } from "../Constant";
import UserContext from "../Contexts/UserContext";

function Home({ navigation }) {
  const [projects, setProjects] = useState([]);
  const [buildings, setBuildings] = useState([]);
  const [units, setUnits] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const state = useContext(UserContext);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverClient}/api/v1/projects`)
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.response), setLoading(false));
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverClient}/api/v1/buildings`)
      .then((response) => {
        setBuildings(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.response), setLoading(false));
  }, []);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${serverClient}/api/v1/units`)
      .then((response) => {
        setUnits(response.data);
        setLoading(false);
      })
      .catch((err) => console.log(err.response), setLoading(false));
  }, []);

  return (
    <View style={styles.center}>
      {loading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#3A4F7A" />
        </View>
      ) : (
        <>
          {user && (
            <Text
              style={{ marginBottom: "2%", fontWeight: "200", fontSize: 30 }}
            >
              Hello. How are you?: {state.userName} !
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
              marginTop: "30%",
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
                    style={{
                      width: 250,
                      height: 150,
                      justifyContent: "center",
                    }}
                    title="All Projects"
                    subtitle={<Text>{projects.count}</Text>}
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
                    style={{
                      width: 250,
                      height: 150,
                      justifyContent: "center",
                    }}
                    title="All Buildings"
                    subtitle={<Text>{buildings.count}</Text>}
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
                    style={{
                      width: 250,
                      height: 150,
                      justifyContent: "center",
                    }}
                    title="All Units"
                    subtitle={<Text>{units.count}</Text>}
                    left={(props) => (
                      <Avatar.Icon {...props} icon="office-building-marker" />
                    )}
                    right={(props) => (
                      <IconButton
                        {...props}
                        icon="chevron-right"
                        onPress={() => {
                          navigation.navigate("Unit");
                        }}
                      />
                    )}
                  />
                </Card>
              </View>
            </ScrollView>
          </View>
        </>
      )}
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
