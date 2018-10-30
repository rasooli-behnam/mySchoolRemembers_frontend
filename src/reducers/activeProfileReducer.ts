import * as constants from "src/constants";
import * as events from "src/sampleData/Events.json";
import * as externalResources from "src/sampleData/ExternalResources.json";
import * as multimedias from "src/sampleData/Multimedias.json";
import * as veteranBios from "src/sampleData/VeteranBios.json";
import { AppState } from ".";
import { GetActiveProfileAction } from "src/actions";
import { reformatEventDate } from "src/utils";
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
    veteranBio: veteranBios.data.find(vb => vb.VeteranID === veteranID) as any, //this 'as any' is required, because ts can't figure out the type
    events: sortBy(
      events.data.filter(e => e.VeteranID === veteranID),
      "Date"
    ).map(reformatEventDate),
    externalResources: externalResources.data.filter(
      er => er.VeteranID === veteranID
    ),
    multimedias: multimedias.data.filter(m => m.VeteranID === veteranID)
  };

  return result;
}
