import * as constants from "src/constants";
import { Action } from "redux";


export type MapActions = MapStartedToFlyAction | MapStoppedFlyingAction;

interface MapStartedToFlyAction extends Action<string> {}
interface MapStoppedFlyingAction extends Action<string> {
  payload: any;
}

export function mapStartedToFly(): MapStartedToFlyAction {
  return {
    type: constants.MAP_STARTED_TO_FLY
  };
}

export function mapStoppedFlying(withDelay: boolean): MapStoppedFlyingAction {
  return withDelay
    ? {
        type: constants.MAP_STOPPED_FLYING,
        payload: new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 2000);
        })
      }
    : {
        type: constants.MAP_STOPPED_FLYING,
        payload: null
      };
}
