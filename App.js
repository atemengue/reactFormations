import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import indexScreen from "./src/screens/indexScreen";
import { Provider } from "./src/context/BlogContext";

const navigator = createStackNavigator(
  {
    Index: indexScreen
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
