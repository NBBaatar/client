import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "../../components/Home";
import projectScreen from "../../components/Project";
import buildingScreen from "../../components/Building";
import loginScreen from "../../components/Login";
import projectAddScreen from "../../components/ProjectAdd";
import buildingAddScreen from "../BuildingAdd";
import unitScreen from "../Unit";
import unitDetailsScreen from "../unitDetails";
import UnitAddScreen from "../UnitAdd";
import UnitUpdateBalconyBeforeScreen from "../UnitUpdateBalconyBefore";
import UnitBathroomUpdateBeforeScreen from "../UnitBathroomUpdateBefore";
import UnitBathroomUpdateAfterScreen from "../UnitBathroomUpdateAfter";
import UnitUpdateBalconyAfterScreen from "../UnitUpdateBalconyAfter";
import UnitLandryUpdateAfterScreen from "../UnitLandryUpdateAfter";
import UnitLandryUpdateBeforeScreen from "../UnitLandryUpdateBefore";
import UnitEnsuitUpdateBeforeScreen from "../UnitEnsuitUpdateBefore";
import UnitEnsuitUpdateAfterScreen from "../UnitEnsuitUpdateAfter";
import UnitViewDetailScreen from "../UnitViewDetail";
import UserContext from "../../Contexts/UserContext";
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const state = useContext(UserContext);
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#36393e",
          headerShown: false,
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      {state.isLoggedIn ? (
        <Stack.Screen name="Home" component={homeScreen} />
      ) : (
        <Stack.Screen name="Login" component={loginScreen} />
      )}
    </Stack.Navigator>
  );
};
const SecondStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#36393e",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Project" component={projectScreen} />
      <Stack.Screen name="Project Add" component={projectAddScreen} />
    </Stack.Navigator>
  );
};
const ThirdStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#36393e",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Building" component={buildingScreen} />
      <Stack.Screen name="Unit" component={unitScreen} />
      <Stack.Screen name="Building Add" component={buildingAddScreen} />
      <Stack.Screen name="UnitDetails" component={unitDetailsScreen} />
      <Stack.Screen name="Unit Add" component={UnitAddScreen} />
      <Stack.Screen name="Unit View" component={UnitViewDetailScreen} />
      <Stack.Screen
        name="Unit bathroom update before"
        component={UnitBathroomUpdateBeforeScreen}
      />
      <Stack.Screen
        name="Unit bathroom update after"
        component={UnitBathroomUpdateAfterScreen}
      />
      <Stack.Screen
        name="Unit update balcony before"
        component={UnitUpdateBalconyBeforeScreen}
      />
      <Stack.Screen
        name="Unit update balcony after"
        component={UnitUpdateBalconyAfterScreen}
      />
      <Stack.Screen
        name="Unit update laundry after"
        component={UnitLandryUpdateAfterScreen}
      />
      <Stack.Screen
        name="Unit update laundry before"
        component={UnitLandryUpdateBeforeScreen}
      />
      <Stack.Screen
        name="Unit update ensuit before"
        component={UnitEnsuitUpdateBeforeScreen}
      />
      <Stack.Screen
        name="Unit update ensuit after"
        component={UnitEnsuitUpdateAfterScreen}
      />
    </Stack.Navigator>
  );
};

export { MainStackNavigator, SecondStackNavigator, ThirdStackNavigator };
