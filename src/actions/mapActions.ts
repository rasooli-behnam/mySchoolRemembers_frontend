import * as constants from "src/constants";
import { Action } from "redux";

export type mapActions = MapStartedToFlyAction | MapStoppedFlyingAction;

interface MapStartedToFlyAction extends Action<string> {}
interface MapStoppedFlyingAction extends Action<string> {}

export function mapStartedToFly(): MapStartedToFlyAction {
  return {
    type: constants.MAP_STARTED_TO_FLY
  };
}

export function mapStoppedFlying(): MapStoppedFlyingAction {
  return {
    type: constants.MAP_STOPPED_FLYING
  };
}
