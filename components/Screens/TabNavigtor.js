import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  MainStackNavigator,
  SecondStackNavigator,
  ThirdStackNavigator,
} from "./StackNavigator";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props) => {
  const getRouteName = (route) => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName?.includes("Login")) {
      return "none";
    }
    return "flex";
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Project") {
            iconName = focused ? "ios-list" : "ios-list-outline";
          } else if (route.name === "Building") {
            iconName = focused ? "albums" : "albums-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1e2124",
        tabBarInactiveTintColor: "#424549",
        headerShown: false, // Hide Duplicated Headers
      })}
    >
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={({ route }) => ({
          tabBarStyle: {
            display: getRouteName(route),
          },
        })}
      />
      <Tab.Screen name="Project" component={SecondStackNavigator} />
      <Tab.Screen name="Building" component={ThirdStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
