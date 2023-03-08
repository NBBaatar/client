import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../components/Home";
import SplashScreen from "../Screens/SplashScreen";
import ProjectScreen from "../../components/Project";
import BuildingScreen from "../../components/Building";
import LoginScreen from "../../components/Login";
import ProjectAddScreen from "../../components/ProjectAdd";
import BuildingAddScreen from "../BuildingAdd";
import UnitScreen from "../Unit";
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
import UserContext from "../../Contexts/UserContext";
import TabNavigatorScreen from "../Screens/TabNavigtor";
import UnitLandScreen from "../UnitLand";
import ACScreen from "../AC";
import CarpetScreen from "../Carpet";
import DefectsScreen from "../Defects";
import PaintScreen from "../Paints";
import WindowsScreen from "../Windows";
import KitchenScreen from "../Kitchen";
import ShelfAnglesScreen from "../ShelfAngles";
import PlasterBoardScreen from "../PlasterBoard";
import PlumbingScreen from "../Plumbing";
import ElectricalScreen from "../Electrical";
import FireCableScreen from "../FireCable";
import FireSplinkerScreen from "../FireSprinkler";
import FrameDoorScreen from "../FrameDoor";
import FrameSteelScreen from "../FrameSteel";
import DryFireCableScreen from "../DryFireCable";
import DryFireCableDryScreen from "../DryFireCableDetail";
import WardrobeScreen from "../Wardrobe";
import FrameDoorDetailScreen from "../FrameDoorDetail";
import FrameSteelDetailScreen from "../FrameSteelDetail";
import ElectricalDetailScreen from "../ElectricalDetail";
import PlumbingDetailScreen from "../PlumbingDetail";
import AcDetailScreen from "../AcDetail";
import AcLandScreen from "../AcLand";
import AcAddScreen from "../AcAdd";
import FireSprinklerDetailScreen from "../FireSprinklerDetail";
import FireCableDetailScreen from "../FireCableDetail";
import WindowsDetailScreen from "../WindowsDetail";
import PlasterBoardDetailScreen from "../PlasterBoardDetail";
import KitchenDetailScreen from "../KitchenDetail";
import WardrobeDetailScreen from "../WardrobeDetail";
import CarpetDetailScreen from "../CarpetDetail";
import PaintDetailScreen from "../PaintDetail";
import ShelfAnglesDetailScreen from "../ShelfAnglesDetail";
import DefectsDetailScreen from "../DefectsDetail";
import DefectsLandScreen from "../DefectsLand";
import DefectAddScreen from "../DefectAdd";
import CarpetAddScreen from "../CarpetAdd";
import CarpetLandScreen from "../CarpetLand";
import DryFireCableAddScreen from "../DryFireCableAdd";
import DryFireCableLandScreen from "../DryFireCableLand";
import ElectricalAddScreen from "../ElectricalAdd";
import ElectricalLandScreen from "../ElectricalLand";
import FireCableLandScreen from "../FireCableLand";
import FireCableAddScreen from "../FireCableAdd";
import FireSprinklerAddScreen from "../FireSprinklerAdd";
import FireSprinklerLandScreen from "../FireSprinklerLand";
import FrameDoorAddScreen from "../FramDoorAdd";
import FrameDoorLandScreen from "../FramDoorLand";
import FrameSteelLandScreen from "../FrameSteelLand";
import FrameSteelAddScreen from "../FrameSteelAdd";
import KitchenAddScreen from "../KitchenAdd";
import KitchenLandScreen from "../KitchenLand";
import PaintLandScreen from "../PaintLand";
import PaintAddScreen from "../PaintAdd";
import PlasterBoardLandScreen from "../PlasterBoardLand";
import PlasterBoardAddScreen from "../PlasterBoardAdd";
import PlumbingAddScreen from "../PlumbingAdd";
import PlumbingLandScreen from "../PlumbingLand";
import ShelfAnglesAddScreen from "../ShelfAnglesAdd";
import ShelfAnglesLandScreen from "../ShelfAnglesLand";
import WardrobeLandScreen from "../WardrobeLand";
import WardrobeAddScreen from "../WardrobeAdd";
import WindowsAddScreen from "../WindowsAdd";
import WindowsLandScreen from "../WindowsLand";
import WaterProofLandScreen from "../WaterProofLand";
import WaterProofAddAfterLandScreen from "../WaterProofAddAfterLand";
import WaterProofAddBeforeLandScreen from "../WaterProofAddBeforeLand";
import WaterProofBalconyDetailAScreen from "../WaterProofBalconyDetailA";
import WaterProofBalconyDetailBScreen from "../WaterProofBalconyDetailB";
import WaterProofBathroomAScreen from "../WaterProofBathroomA";
import WaterProofBathroomBScreen from "../WaterProofBathroomB";
import WaterProofLaundryAScreen from "../WaterProofLaundryA";
import WaterProofLaundryBScreen from "../WaterProofLaundryB";
import WaterProofEnsuiteAScreen from "../WaterProofEnsuiteA";
import WaterProofEnsuiteBScreen from "../WaterProofEnsuiteB";
import TilesLandScreen from "../TilesLand";
import TilesLaundryScreen from "../TilesL";
import TilesEnsuiteScreen from "../TilesE";
import TilesKitchenScreen from "../TilesK";
import TilesBathroomScreen from "../TilesB";
import TilesBathroomEditScreen from "../TilesBedit";
import TilesKitchenEditScreen from "../TilesKedit";
import TilesLaundryEditScreen from "../TilesLedit";
import TilesEnsuiteEditScreen from "../TilesEedit";
import HebelLandScreen from "../HebelLand";
import HebelDetailScreen from "../HebelDetail";
import HebelUpdateScreen from "../HebelUpdate";
import HebelAddScreen from "../HebelAdd";
import CheckListScreen from "../CheckList";
import CheckListDetailScreen from "../CheckListDetail";
// import CheckListDetailFireScreen from "../CheckListDetailFire";
// import CheckListEditScreen from "../CheckListEdit";
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
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Unit" component={UnitScreen} />
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
      <Stack.Screen name="Project" component={ProjectScreen} />
      <Stack.Screen name="Project Add" component={ProjectAddScreen} />
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
      <Stack.Screen name="Building" component={BuildingScreen} />
      <Stack.Screen name="Building List" component={BuildingListScreen} />
      <Stack.Screen name="Unit" component={UnitScreen} />
      <Stack.Screen name="Units" component={UnitLandScreen} />
      <Stack.Screen name="Ac Land" component={AcLandScreen} />
      <Stack.Screen name="AC" component={ACScreen} />
      <Stack.Screen name="Ac add" component={AcAddScreen} />
      <Stack.Screen name="AC detail" component={AcDetailScreen} />
      <Stack.Screen name="Carpet Land" component={CarpetLandScreen} />
      <Stack.Screen name="Carpet" component={CarpetScreen} />
      <Stack.Screen name="Carpet detail" component={CarpetDetailScreen} />
      <Stack.Screen name="Carpet add" component={CarpetAddScreen} />
      <Stack.Screen name="Defects land" component={DefectsLandScreen} />
      <Stack.Screen name="Defects" component={DefectsScreen} />
      <Stack.Screen name="Defects detail" component={DefectsDetailScreen} />
      <Stack.Screen name="Defect add" component={DefectAddScreen} />
      <Stack.Screen name="Paints land" component={PaintLandScreen} />
      <Stack.Screen name="Paint add" component={PaintAddScreen} />
      <Stack.Screen name="Paints" component={PaintScreen} />
      <Stack.Screen name="Paint detail" component={PaintDetailScreen} />
      <Stack.Screen name="Windows land" component={WindowsLandScreen} />
      <Stack.Screen name="Windows add" component={WindowsAddScreen} />
      <Stack.Screen name="Windows" component={WindowsScreen} />
      <Stack.Screen name="Windows detail" component={WindowsDetailScreen} />
      <Stack.Screen name="Kitchen land" component={KitchenLandScreen} />
      <Stack.Screen name="Kitchen add" component={KitchenAddScreen} />
      <Stack.Screen name="Kitchen" component={KitchenScreen} />
      <Stack.Screen name="Kitchen detail" component={KitchenDetailScreen} />
      <Stack.Screen name="Plumbing land" component={PlumbingLandScreen} />
      <Stack.Screen name="Plumbing add" component={PlumbingAddScreen} />
      <Stack.Screen name="Plumbing" component={PlumbingScreen} />
      <Stack.Screen name="Plumbing detail" component={PlumbingDetailScreen} />
      <Stack.Screen name="Tiles land" component={TilesLandScreen} />
      <Stack.Screen name="Tiles laundry" component={TilesLaundryScreen} />
      <Stack.Screen name="Tiles bathroom" component={TilesBathroomScreen} />
      <Stack.Screen name="Tiles kitchen" component={TilesKitchenScreen} />
      <Stack.Screen name="Tiles ensuite" component={TilesEnsuiteScreen} />
      <Stack.Screen name="Hebel land" component={HebelLandScreen} />
      <Stack.Screen name="Hebel add" component={HebelAddScreen} />
      <Stack.Screen name="Hebel update" component={HebelUpdateScreen} />
      <Stack.Screen name="Hebel detail" component={HebelDetailScreen} />
      <Stack.Screen
        name="Tiles ensuite edit"
        component={TilesEnsuiteEditScreen}
      />
      <Stack.Screen
        name="Tiles bathroom edit"
        component={TilesBathroomEditScreen}
      />
      <Stack.Screen
        name="Tiles laundry edit"
        component={TilesLaundryEditScreen}
      />
      <Stack.Screen
        name="Tiles kitchen edit"
        component={TilesKitchenEditScreen}
      />

      <Stack.Screen name="Electrical land" component={ElectricalLandScreen} />
      <Stack.Screen name="Electrical add" component={ElectricalAddScreen} />
      <Stack.Screen name="Electrical" component={ElectricalScreen} />
      <Stack.Screen
        name="Electrical detail"
        component={ElectricalDetailScreen}
      />
      <Stack.Screen
        name="Plaster Board land"
        component={PlasterBoardLandScreen}
      />
      <Stack.Screen
        name="Plaster Board add"
        component={PlasterBoardAddScreen}
      />
      <Stack.Screen name="Plaster Board" component={PlasterBoardScreen} />
      <Stack.Screen
        name="Plaster Board detail"
        component={PlasterBoardDetailScreen}
      />
      <Stack.Screen
        name="Shelf Angles land"
        component={ShelfAnglesLandScreen}
      />
      <Stack.Screen name="Shelf Angles add" component={ShelfAnglesAddScreen} />
      <Stack.Screen name="Shelf Angles" component={ShelfAnglesScreen} />
      <Stack.Screen
        name="Shelf Angles detail"
        component={ShelfAnglesDetailScreen}
      />
      <Stack.Screen name="Fire Cable land" component={FireCableLandScreen} />
      <Stack.Screen name="Fire Cable add" component={FireCableAddScreen} />
      <Stack.Screen name="Fire Cable" component={FireCableScreen} />
      <Stack.Screen
        name="Fire Cable detail"
        component={FireCableDetailScreen}
      />
      <Stack.Screen
        name="Fire Splinker land"
        component={FireSprinklerLandScreen}
      />
      <Stack.Screen
        name="Fire Splinker add"
        component={FireSprinklerAddScreen}
      />
      <Stack.Screen name="Fire Splinker" component={FireSplinkerScreen} />
      <Stack.Screen
        name="Fire Splinker detail"
        component={FireSprinklerDetailScreen}
      />
      <Stack.Screen
        name="Dry Fire cable land"
        component={DryFireCableLandScreen}
      />
      <Stack.Screen
        name="Dry Fire cable add"
        component={DryFireCableAddScreen}
      />
      <Stack.Screen name="Dry Fire Cables" component={DryFireCableScreen} />
      <Stack.Screen
        name="Dry Fire Cables Detail"
        component={DryFireCableDryScreen}
      />
      <Stack.Screen name="Wardrobe land" component={WardrobeLandScreen} />
      <Stack.Screen name="Wardrobe add" component={WardrobeAddScreen} />
      <Stack.Screen name="Wardrobe" component={WardrobeScreen} />
      <Stack.Screen name="Wardrobe detail" component={WardrobeDetailScreen} />
      <Stack.Screen name="Checklist" component={CheckListScreen} />
      <Stack.Screen name="Checklist detail" component={CheckListDetailScreen} />
      {/* <Stack.Screen
        name="Checklist detail fire"
        component={CheckListDetailFireScreen}
      /> */}
      {/* <Stack.Screen name="Checklist edit" component={CheckListEditScreen} /> */}
      <Stack.Screen name="Building Add" component={BuildingAddScreen} />

      <Stack.Screen name="Door frame land" component={FrameDoorLandScreen} />
      <Stack.Screen name="Door frame add" component={FrameDoorAddScreen} />
      <Stack.Screen name="Door frame" component={FrameDoorScreen} />
      <Stack.Screen
        name="Door frame detail"
        component={FrameDoorDetailScreen}
      />
      <Stack.Screen
        name="Steel framing land"
        component={FrameSteelLandScreen}
      />
      <Stack.Screen name="Steel framing add" component={FrameSteelAddScreen} />
      <Stack.Screen name="Steel framing" component={FrameSteelScreen} />
      <Stack.Screen
        name="Steel framing detail"
        component={FrameSteelDetailScreen}
      />
      <Stack.Screen name="Unit Add" component={UnitAddScreen} />
      <Stack.Screen name="Water Proof land" component={WaterProofLandScreen} />
      <Stack.Screen
        name="Water Proof balcony after"
        component={WaterProofBalconyDetailAScreen}
      />
      <Stack.Screen
        name="Water Proof balcony before"
        component={WaterProofBalconyDetailBScreen}
      />
      <Stack.Screen
        name="Water Proof bathroom after"
        component={WaterProofBathroomAScreen}
      />
      <Stack.Screen
        name="Water Proof bathroom before"
        component={WaterProofBathroomBScreen}
      />
      <Stack.Screen
        name="Water Proof laundry after"
        component={WaterProofLaundryAScreen}
      />
      <Stack.Screen
        name="Water Proof laundry before"
        component={WaterProofLaundryBScreen}
      />
      <Stack.Screen
        name="Water Proof ensuite after"
        component={WaterProofEnsuiteAScreen}
      />
      <Stack.Screen
        name="Water Proof ensuite before"
        component={WaterProofEnsuiteBScreen}
      />
      <Stack.Screen
        name="Water Proof add before land"
        component={WaterProofAddBeforeLandScreen}
      />
      <Stack.Screen
        name="Water Proof add after land"
        component={WaterProofAddAfterLandScreen}
      />

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
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
        <Stack.Screen name="Splash" component={SplashScreen} />
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
