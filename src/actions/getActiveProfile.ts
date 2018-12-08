import * as constants from "src/constants";
import axios, { AxiosPromise } from "axios";
import Profile from "src/dataTypes/Profile";
import { Action } from "redux";



export interface GetActiveProfileAction extends Action<string> {
  payload: any;
}

export default function getActiveProfile(
  profile: Profile
): GetActiveProfileAction {
  const request = axios.get(
    encodeURI(
      `http://my-school-remembers-backend.appspot.com/api/profiles/?reg_no=${
        profile.reg_no
      }&battalion=${profile.battalion}`
    )
  );
  console.log(request);
  return {
    type: constants.GET_ACTIVE_PROFILE,
    payload: request
  };
}
