import * as constants from "src/constants";
import axios, { AxiosPromise } from "axios";
import { Action } from "redux";

export interface GetProfilesAction extends Action<string> {
  payload: any;
}

export default function getProfiles(
  filterBy: string,
  condition: string
): GetProfilesAction {
  const request = axios.get(
    `http://my-school-remembers-backend.appspot.com/api/profiles?filterBy=${filterBy}&condition=${condition}`
  );
  console.log(request);
  return {
    type: constants.GET_PROFILES,
    payload: request
  };
}
