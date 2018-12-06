import * as constants from "src/constants";
import Multimedia from "src/dataTypes/Multimedia";
import { AppState } from ".";
import { GetActiveProfileAction, TimelineChangedAction } from "src/actions";



const sortBy = require("lodash.sortby");

export default function(
  prevState: AppState,
  action: GetActiveProfileAction | TimelineChangedAction
) {
  switch (action.type) {
    case constants.TIMELINE_CHANGED:
      return prevState.activeProfile.multimedias.filter(
        m =>
          m.date ===
          prevState.activeProfile.events[action.payload.eventIndex].date
      );
    case `${constants.GET_ACTIVE_PROFILE}_FULFILLED`:
      const sortedMultimedias: Multimedia[] = sortBy(
        action.payload.data.multimedias,
        "date"
      );

      return sortedMultimedias.filter(
        m => m.date === sortedMultimedias[0].date //initial date
      );
  }

  return prevState && prevState.multimedias ? prevState.multimedias : [];
}
