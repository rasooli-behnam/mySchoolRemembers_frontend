import * as constants from "src/constants";
import * as profiles from "src/sampleData/profiles.json";
import { AppState } from ".";
import { FindProfilesAction } from "src/actions";

export default function(prevState: AppState, action: FindProfilesAction) {
  if (action.type === constants.FIND_PROFILES) {
    const searchCategory = action.payload.searchCategory;
    const searchTerm = action.payload.searchTerm;

    return profiles.data.filter(vb => vb[searchCategory] === searchTerm);
  }

  return prevState && prevState.profiles ? prevState.profiles : [];
}
