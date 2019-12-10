import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";
import MainScreen from "../screens/MainScreen";
import HomeScreen from "../screens/HomeScreen";

export default createAppContainer(
  createSwitchNavigator(
    {
      MainScreen,
      SignupScreen,
      SigninScreen,
      HomeScreen
    },
    {
      initialRouteName: "MainScreen",
      backBehavior: "initialRoute"
    }
  )
);
