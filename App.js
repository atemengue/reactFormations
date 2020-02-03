import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import indexScreen from "./src/screens/indexScreen";
import { Provider } from "./src/context/BlogContext";
import ShowScreen from "./src/screens/ShowScreen";
import CreateScreen from "./src/screens/CreateScreen";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator(
  {
    Index: indexScreen,
    Show: ShowScreen,
    Create: CreateScreen,
    Edit: EditScreen
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Blogs"
    }
  }
);

//Wrapper app change default
const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
