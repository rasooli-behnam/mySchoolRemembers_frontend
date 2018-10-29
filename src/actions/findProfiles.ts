import * as constants from "src/constants";
import { Action } from "redux";

export interface FindProfilesAction extends Action<string> {
  payload: {
    searchCategory: string;
    searchTerm: string;
  };
}

export default function(
  prams: FindProfilesAction["payload"]
): FindProfilesAction {
  return {
    type: constants.FIND_PROFILES,
    payload: prams
  };
}
