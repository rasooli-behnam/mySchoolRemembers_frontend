import * as constants from "src/constants";
import Multimedia from "src/dataTypes/Multimedia";
import { AppState } from ".";
import { GetActiveProfileAction, OpenMultimediaComponentAction } from "src/actions";



const sortBy = require("lodash.sortby");

export default function(
  prevState: AppState,
  action: OpenMultimediaComponentAction | GetActiveProfileAction
) {
  if (action.type === constants.OPEN_MULTIMEDIA_COMPONENT) {
    return prevState.activeProfile.multimedias.filter(
      m => m.date === action.payload.date
    );
  }

  if (action.type === `${constants.GET_ACTIVE_PROFILE}_FULFILLED`) {
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
