// import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { MainStackNavigator } from "./components/Screens/StackNavigator";
// import { SafeAreaView } from "react-native";
import BottomTabNavigator from "./components/Screens/TabNavigtor";
import loginScreen from "./components/Login";
import { UserStore } from "./Contexts/UserContext";
export default function App() {
  return (
    <NavigationContainer>
      <UserStore>
        <BottomTabNavigator />
      </UserStore>
      {/* <MainStackNavigator /> */}
    </NavigationContainer>
    // <SafeAreaView style={{ flex: 1 }}>

    //   <StatusBar style="auto" />
    // </SafeAreaView>
  );
}
