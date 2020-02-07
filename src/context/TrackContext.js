import trackerApi from "../api/tracker";
import CreateDataContext from "./CreateDataContext";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "fetch_tracks":
      return action.payload;
    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const response = trackerApi.get("/tracks");
  dispatch({ type: "fetch_tracks", payload: response.data });
};
const createTrack = dispatch => async (name, locations) => {
  await trackerApi.post("/tracks", { name, locations });
};

export const { Provider, Context } = CreateDataContext(
  trackReducer,
  {
    fetchTracks,
    createTrack
  },
  []
);
