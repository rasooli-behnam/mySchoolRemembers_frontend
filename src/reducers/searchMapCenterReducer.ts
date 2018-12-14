import * as constants from "src/constants";
import { AppState } from ".";
import { GetProfilesAction } from "src/actions/getProfiles";


export default function(prevState: AppState, action: GetProfilesAction) {
  if (action.type === `${constants.GET_SEARCH_MAP_CENTER}_FULFILLED`) {
    const { center } = action.payload;
    return { lat: center[1], lon: center[0] };
  }

  return prevState && prevState.searchMapCenter
    ? prevState.searchMapCenter
    : initialState;
}

const initialState = {
  lat: -24.5,
  lon: 135.5
};
