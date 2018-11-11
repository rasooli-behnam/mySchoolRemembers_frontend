import * as constants from "src/constants";
import * as profiles from "src/sampleData/profiles.json";
import { AppState } from ".";
import { GetProfilesAction } from "src/actions/getProfiles";

export default function(prevState: AppState, action: GetProfilesAction) {
  if (action.type === `${constants.GET_PROFILES}_FULFILLED`) {
    return action.payload.data;
  }

  return prevState && prevState.profiles ? prevState.profiles : initialState;
}

const initialState = [
  {
    available: true,
    reg_no: "1553",
    name: "James Martin",
    coords: { lat: -37.817581, lon: 145.033184 }
  }
];
