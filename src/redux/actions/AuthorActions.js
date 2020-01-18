import { LOAD_AUTHORS_SUCCESS } from "./actionsTypes";
import * as authorApi from "../../api/authorApi";

export function loadAuthors() {
  return function(dispatch) {
    return authorApi
      .getAuthors()
      .then(authors => {
        dispatch(loadAuthorsSuccess(authors));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadAuthorsSuccess(authors) {
  return {
    type: LOAD_AUTHORS_SUCCESS,
    value: authors
  };
}
