import * as constants from "src/constants";
import { AppState } from ".";
import { GetActiveProfileAction, TimelineChangedAction } from "src/actions";



export default function(
  prevState: AppState,
  action: TimelineChangedAction | GetActiveProfileAction
): AppState["timelineState"] {
  switch (action.type) {
    case `${constants.GET_ACTIVE_PROFILE}_FULFILLED`:
      return { ...prevState.timelineState, isChanged: true };
    case constants.TIMELINE_CHANGED:
      return { ...prevState.timelineState, isChanged: true };
    case constants.MAP_STARTED_TO_FLY:
      return { ...prevState.timelineState, isChanged: false };
  }

  return prevState && prevState.timelineState
    ? prevState.timelineState
    : initialState;
}

const initialState: AppState["timelineState"] = {
  isChanged: false
};
