import * as constants from "src/constants";
import * as profile from "src/sampleData/profile.json";
import Event from "src/dataTypes/Events";
import Multimedia from "src/dataTypes/Multimedia";
import { AppState } from ".";
import { GetActiveProfileAction } from "src/actions";
import { reformatDate } from "src/utils";
const sortBy = require("lodash.sortby");

export default function(prevState: AppState, action: GetActiveProfileAction) {
  if (action.type === constants.GET_ACTIVE_PROFILE) {
    return getProfile(action.payload.veteranID);
  }

  return prevState && prevState.activeProfile
    ? prevState.activeProfile
    : initialState;
}

const initialState = getProfile("189210");

function getProfile(veteranID: string): AppState["activeProfile"] {
  const result: AppState["activeProfile"] = {
    ...profile,
    events: sortBy(profile.events, "date").map((e: Event) => {
      e.date = reformatDate(e.date);
      return e;
    }),
    multimedias: profile.multimedias.map((m: Multimedia) => {
      m.date = reformatDate(m.date);
      return m;
    })
  };

  return result;
}
