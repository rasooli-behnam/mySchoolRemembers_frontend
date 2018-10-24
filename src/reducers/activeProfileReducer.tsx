import * as constants from "src/constants";
import * as externalResources from "src/sampleData/ExternalResources.json";
import * as veteranBios from "src/sampleData/VeteranBios.json";
import ExternalResource from "src/dataTypes/ExternalResource";
import VeteranBio from "src/dataTypes/VeteranBio";
import { AppState } from ".";
import { GetActiveProfile } from "src/actions";

export default function(prevState: AppState, action: GetActiveProfile) {
  if (action.type === constants.GET_ACTIVE_PROFILE) {
    return getProfile(action.payload.veteranID);
  }

  if (prevState && prevState.activeProfile) return prevState.activeProfile;
  else return initialState;
}

const initialState = getProfile("189210");

function getProfile(veteranID: string): AppState["activeProfile"] {
  const result: AppState["activeProfile"] = {
    veteranBio: veteranBios.data.find(vb => vb.VeteranID === veteranID) as any, //this 'as any' is required, because ts can't figure out the type
    externalResources: externalResources.data.filter(
      er => er.VeteranID === veteranID
    )
  };

  return result;
}
