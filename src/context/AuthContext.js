import { AsyncStorage } from "react-native";
import TrackerAPI from "../api/tracker";
import { navigate } from "../naviagationRef";
import CreateDataContext from "./CreateDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "signup":
      return { errorMessage: " ", token: action.payload };
    default:
      return state;
  }
};

// const signup = dispatch => {
//   return async ({ email, password }) => {
//     try {
//       const response = await TrackerAPI.post("/signup", { email, password });
//       await AsyncStorage.setItem("token", response.data.token);
//       dispatch({ type: "signup", payload: response.data.token });
//     } catch (error) {
//       dispatch({
//         type: "add_error",
//         payload: "Something went wrong with sign up"
//       });
//     }
//   };
// };

const signup = dispatch => async ({ email, password }) => {
  try {
    const response = await TrackerAPI.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });
    navigate("TrackList");
  } catch (error) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with sign up"
    });
  }
};

const signin = dispatch => {
  return ({ email, password }) => {};
};

const signout = dispatch => {
  return () => {};
};

export const { Provider, Context } = CreateDataContext(
  authReducer,
  { signup, signin, signout },
  { token: null, errorMessage: "" }
);
