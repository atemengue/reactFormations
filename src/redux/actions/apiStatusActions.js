import { BEGIN_API_CALL, API_CALL_ERROR } from "./actionsTypes";

export const beginApiCall = () => {
  return {
    type: BEGIN_API_CALL
  };
};

export const apiCallError = error => {
  return {
    type: API_CALL_ERROR,
    value: error
  };
};
