import activeProfileReducer from "./activeProfileReducer";
import componentsVisibilityReducer from "./componentsVisibilityReducer";
import Event from "src/dataTypes/Events";
import ExternalResource from "src/dataTypes/ExternalResource";
import Multimedia from "src/dataTypes/Multimedia";
import multimediasReducer from "./multimediasReducer";
import profilesReducer from "./profilesReducer";
import VeteranBio from "src/dataTypes/VeteranBio";

export default function combineReducers(
  appState: AppState,
  action: any
): AppState {
  return {
    activeProfile: activeProfileReducer(appState, action),
    componentsVisibility: componentsVisibilityReducer(appState, action),
    isTimelineDisabled: false,
    multimedias: multimediasReducer(appState, action),
    profiles: profilesReducer(appState, action)
  };
}

export interface AppState {
  activeProfile: {
    veteranBio: VeteranBio;
    events: Event[];
    externalResources: ExternalResource[];
    multimedias: Multimedia[];
  };
  componentsVisibility: {
    isBiographyOpen: boolean;
    isMultimediaOpen: boolean;
    isSearchOpen: boolean;
  };
  isTimelineDisabled: boolean;
  multimedias: Multimedia[];
  profiles: VeteranBio[];
}
