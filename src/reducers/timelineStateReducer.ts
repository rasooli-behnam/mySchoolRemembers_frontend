import * as constants from "src/constants";
import { AppState } from ".";
import { GetActiveProfileAction, MapActions, TimelineChangedAction } from "src/actions";



export default function(
  prevState: AppState,
  action: TimelineChangedAction | MapActions | GetActiveProfileAction
): AppState["timelineState"] {
  switch (action.type) {
    case `${constants.GET_ACTIVE_PROFILE}_FULFILLED`:
      return { ...prevState.timelineState, isChanged: true };
    case constants.TIMELINE_CHANGED:
      return { ...prevState.timelineState, isChanged: true };
    case constants.MAP_STARTED_TO_FLY:
      return { ...prevState.timelineState, isChanged: false, isDisabled: true };
    case constants.MAP_STOPPED_FLYING:
      return { ...prevState.timelineState, isDisabled: false };
  }

  return prevState && prevState.timelineState
    ? prevState.timelineState
    : initialState;
}

const initialState: AppState["timelineState"] = {
  isChanged: false,
  isDisabled: false
};
