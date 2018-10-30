import * as constants from "src/constants";
import { Action } from "redux";

export interface TimelineChangedAction extends Action<string> {
  payload: {
    eventIndex: number;
  };
}

export default function timelineChanged(
  prams: TimelineChangedAction["payload"]
): TimelineChangedAction {
  return {
    type: constants.TIMELINE_CHANGED,
    payload: prams
  };
}
