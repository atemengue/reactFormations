import { CREATE_COURSE } from "../actions/actionsTypes";

export default function courseReducer(state = [], action) {
  switch (action.type) {
    case CREATE_COURSE:
      return [...state, { ...action.value }];
    default:
      return state;
  }
}
