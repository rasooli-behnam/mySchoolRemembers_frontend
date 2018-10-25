import * as constants from "src/constants";
import { Action } from "redux";

export interface GetActiveProfileAction extends Action<string> {
  payload: {
    veteranID: string;
  };
}

export default function getActiveProfile(
  prams: GetActiveProfileAction["payload"]
): GetActiveProfileAction {
  return {
    type: constants.GET_ACTIVE_PROFILE,
    payload: prams
  };
}
