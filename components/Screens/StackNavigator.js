import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import homeScreen from "../../components/Home";
import SplashScreen from "../Screens/SplashScreen";
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
import BuildingListScreen from "../Lists/BuildingList";
import UnitViewDetailScreen from "../UnitViewDetail";
import UserContext from "../../Contexts/UserContext";
import TabNavigatorScreen from "../Screens/TabNavigtor";
import unitLandScreen from "../UnitLand";
import ACScreen from "../AC";
import CarpetScreen from "../Carpet";
import DefectsScreen from "../Defects";
import PaintScreen from "../Paints";
import WindowsScreen from "../Windows";
import KitchenScreen from "../Kitchen";
import TilesScreen from "../Tiles";
import ShelfAnglesScreen from "../ShelfAngles";
import PlasterBoardScreen from "../PlasterBoard";
import PlumbingScreen from "../Plumbing";
import ElectricalScreen from "../Electrical";
import FireCableScreen from "../FireCable";
import FireSplinkerScreen from "../FireSprinkler";
import FrameDoorScreen from "../FrameDoor";
import FrameSteelScreen from "../FrameSteel";
import DryFireCableScreen from "../DryFireCable";
import WardrobeScreen from "../Wardrobe";
import FrameDoorDetailScreen from "../FrameDoorDetail";
import FrameSteelDetailScreen from "../FrameSteelDetail";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  // if (state.isLoading === true) return <SplashScreen />;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#36393e",
          headerShown: false,
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen name="Home" component={homeScreen} />
      <Stack.Screen name="Login" component={loginScreen} />
      <Stack.Screen name="Unit" component={unitScreen} />
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
      <Stack.Screen name="Building List" component={BuildingListScreen} />
      <Stack.Screen name="Unit" component={unitScreen} />
      <Stack.Screen name="Units" component={unitLandScreen} />
      <Stack.Screen name="AC" component={ACScreen} />
      <Stack.Screen name="Carpet" component={CarpetScreen} />
      <Stack.Screen name="Defects" component={DefectsScreen} />
      <Stack.Screen name="Paints" component={PaintScreen} />
      <Stack.Screen name="Windows" component={WindowsScreen} />
      <Stack.Screen name="Kitchen" component={KitchenScreen} />
      <Stack.Screen name="Plumbing" component={PlumbingScreen} />
      <Stack.Screen name="Tiles" component={TilesScreen} />
      <Stack.Screen name="Electrical" component={ElectricalScreen} />
      <Stack.Screen name="Plaster Board" component={PlasterBoardScreen} />
      <Stack.Screen name="Shelf Angles" component={ShelfAnglesScreen} />
      <Stack.Screen name="Fire Cable" component={FireCableScreen} />
      <Stack.Screen name="Fire Splinker" component={FireSplinkerScreen} />
      <Stack.Screen name="Dry Fire Cables" component={DryFireCableScreen} />
      <Stack.Screen name="Wardrobe" component={WardrobeScreen} />
      <Stack.Screen name="Building Add" component={buildingAddScreen} />
      <Stack.Screen name="UnitDetails" component={unitDetailsScreen} />
      <Stack.Screen name="Door frame" component={FrameDoorScreen} />
      <Stack.Screen
        name="Door frame detail"
        component={FrameDoorDetailScreen}
      />
      <Stack.Screen name="Steel framing" component={FrameSteelScreen} />
      <Stack.Screen
        name="Steel framing detail"
        component={FrameSteelDetailScreen}
      />
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
const StackNavigator = () => {
  const state = useContext(UserContext);
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#36393e",
          },
          headerTintColor: "white",
          headerBackTitle: "Back",
        }}
      >
        {state.isLoggedIn ? (
          <Stack.Screen name="Home" component={TabNavigatorScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={loginScreen} />
          </>
        )}
        <Stack.Screen name="Splash" component={SplashScreen} />
        {/* <Stack.Screen name="Login" component={loginScreen} /> */}
        {/* <Stack.Screen name="Home" component={TabNavigatorScreen} /> */}
      </Stack.Navigator>
    </>
  );
};
export {
  MainStackNavigator,
  SecondStackNavigator,
  ThirdStackNavigator,
  StackNavigator,
};
