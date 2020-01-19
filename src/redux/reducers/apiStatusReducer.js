import initialState from "./initialState";
import { BEGIN_API_CALL, API_CALL_ERROR } from "../actions/actionsTypes";

function actionTypeEndInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}

export default function apiCallStatusReducer(
  state = initialState.apiCallsInProgress,
  action
) {
  if (action.type === BEGIN_API_CALL) {
    return state + 1;
  } else if (
    actionTypeEndInSuccess(action.type) ||
    API_CALL_ERROR == action.type
  ) {
    console.log("END");
    return state - 1;
  }
  return state;
}
