import * as constants from "src/constants";
import { AppState } from ".";
import { TimelineChangedAction } from "src/actions";

export default function(prevState: AppState, action: TimelineChangedAction) {
  if (action.type === constants.TIMELINE_CHANGED)
    return action.payload.eventIndex;

  return prevState && prevState.currentEventIndex
    ? prevState.currentEventIndex
    : 0;
}
