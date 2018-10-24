import activeProfileReducer from "./activeProfileReducer";
import ExternalResource from "src/dataTypes/ExternalResource";
import VeteranBio from "src/dataTypes/VeteranBio";

export default function combineReducers(
  appState: AppState,
  action: any
): AppState {
  return {
    activeProfile: activeProfileReducer(appState, action)
  };
}

export interface AppState {
  activeProfile: {
    veteranBio: VeteranBio;
    externalResources: ExternalResource[];
  };
}
