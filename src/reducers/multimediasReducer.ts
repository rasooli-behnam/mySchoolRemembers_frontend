import * as constants from "src/constants";
import { AppState } from ".";
import { OpenMultimediaComponentAction } from "src/actions";

export default function(
  prevState: AppState,
  action: OpenMultimediaComponentAction
) {
  if (action.type === constants.OPEN_MULTIMEDIA_COMPONENT) {
    const payload = action.payload;
    if (payload) {
      return prevState.activeProfile.multimedias.filter(
        m => m.Date === payload.date
      );
    } else return prevState.activeProfile.multimedias;
  }

  return prevState && prevState.multimedias ? prevState.multimedias : [];
}
