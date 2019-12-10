import { createAppContainer, createSwitchNavigator } from "react-navigation";

import TelaCadastro from "../screens/SignupScreen";
import TelaPrincipal from "../screens/MainScreen";

export default createAppContainer(
  createSwitchNavigator({
    Main: TelaPrincipal,
    SignUp: TelaCadastro
  })
);
