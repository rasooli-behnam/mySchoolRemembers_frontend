import * as constants from "src/constants";
import { Action } from "redux";

export interface GetActiveProfile extends Action<string> {
  payload: {
    veteranID: string;
  };
}

export default function getActiveProfile(
  prams: GetActiveProfile["payload"]
): GetActiveProfile {
  return {
    type: constants.GET_ACTIVE_PROFILE,
    payload: prams
  };
}
