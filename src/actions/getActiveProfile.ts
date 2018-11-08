import * as constants from "src/constants";
import axios, { AxiosPromise } from "axios";
import { Action } from "redux";

export interface GetActiveProfileAction extends Action<string> {
  payload: any;
}

export default function getActiveProfile(
  reg_no: string
): GetActiveProfileAction {
  const request = axios.get(`http://localhost:8080/api/profiles/${reg_no}`);
  console.log(request);
  return {
    type: constants.GET_ACTIVE_PROFILE,
    payload: request
  };
}
