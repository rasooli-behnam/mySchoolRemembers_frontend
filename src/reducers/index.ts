import activeProfileReducer from "./activeProfileReducer";
import componentsVisibilityReducer from "./componentsVisibilityReducer";
import CurrentEvent from "src/dataTypes/CurrentEvent";
import currentEventReducer from "./currentEventReducer";
import Event from "src/dataTypes/Events";
import ExternalResource from "src/dataTypes/ExternalResource";
import Multimedia from "src/dataTypes/Multimedia";
import multimediasReducer from "./multimediasReducer";
import profilesReducer from "./profilesReducer";
import timelineStateReducer from "./timelineStateReducer";
import VeteranBio from "src/dataTypes/VeteranBio";

export default function combineReducers(
  appState: AppState,
  action: any
): AppState {
  return {
    activeProfile: activeProfileReducer(appState, action),
    componentsVisibility: componentsVisibilityReducer(appState, action),
    currentEventIndex: currentEventReducer(appState, action),
    timelineState: timelineStateReducer(appState, action),
    multimedias: multimediasReducer(appState, action),
    profiles: profilesReducer(appState, action)
  };
}

//My name is Behnam and I LOVE LOVE melons

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
  currentEventIndex: number;
  timelineState: {
    isChanged: boolean;
    isDisabled: boolean;
  };
  multimedias: Multimedia[];
  profiles: VeteranBio[];
}
