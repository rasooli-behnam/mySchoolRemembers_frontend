import * as constants from "src/constants";
import { AppState } from ".";
import { GetActiveProfileAction, TimelineChangedAction } from "src/actions";



export default function(
  prevState: AppState,
  action: TimelineChangedAction | GetActiveProfileAction
) {
  switch (action.type) {
    case `${constants.GET_ACTIVE_PROFILE}_FULFILLED`:
      return 0;
    case constants.TIMELINE_CHANGED:
      return action.payload.eventIndex;
  }

  return prevState && prevState.currentEventIndex
    ? prevState.currentEventIndex
    : 0;
}
