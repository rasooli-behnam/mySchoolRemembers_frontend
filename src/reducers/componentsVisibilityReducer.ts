import * as constants from "src/constants";
import { AppState } from ".";
import { ComponentsVisibilityActions } from "src/actions";

export default function(
  prevState: AppState,
  action: ComponentsVisibilityActions
) {
  switch (action.type) {
    case constants.OPEN_BIOGRAPHY_COMPONENT:
      return { isBiographyOpen: true };
    case constants.CLOSE_BIOGRAPHY_COMPONENT:
      return { isBiographyOpen: false };
  }

  return prevState && prevState.componentsVisibility
    ? prevState.componentsVisibility
    : initialState;
}

const initialState: AppState["componentsVisibility"] = {
  isBiographyOpen: false
};
