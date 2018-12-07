import * as constants from "src/constants";
import { AppState } from ".";
import { ComponentsVisibilityActions, mapActions } from "src/actions";



export default function(
  prevState: AppState,
  action: ComponentsVisibilityActions | mapActions
) {
  switch (action.type) {
    case constants.OPEN_BIOGRAPHY_COMPONENT:
      return { ...prevState.componentsVisibility, isBiographyOpen: true };
    case constants.CLOSE_BIOGRAPHY_COMPONENT:
      return { ...prevState.componentsVisibility, isBiographyOpen: false };
    case constants.MAP_STOPPED_FLYING:
      return { ...prevState.componentsVisibility, isMultimediaOpen: true };
    case constants.MAP_STARTED_TO_FLY:
      return { ...prevState.componentsVisibility, isMultimediaOpen: false };
    case constants.OPEN_SEARCH_COMPONENT:
      return { ...prevState.componentsVisibility, isSearchOpen: true };
    case constants.CLOSE_SEARCH_COMPONENT:
      return { ...prevState.componentsVisibility, isSearchOpen: false };
    case `${constants.GET_ACTIVE_PROFILE}_FULFILLED`:
      return { ...prevState.componentsVisibility, isSearchOpen: false };
  }

  return prevState && prevState.componentsVisibility
    ? prevState.componentsVisibility
    : initialState;
}

const initialState: AppState["componentsVisibility"] = {
  isBiographyOpen: false,
  isMultimediaOpen: false,
  isSearchOpen: false
};
