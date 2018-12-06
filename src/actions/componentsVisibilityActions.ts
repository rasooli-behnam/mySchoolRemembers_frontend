import * as constants from "src/constants";
import { Action } from "redux";


export type ComponentsVisibilityActions =
  | OpenBiographyComponentAction
  | CloseBiographyComponentAction
  | OpenMultimediaComponentAction
  | CloseMultimediaComponentAction
  | OpenSearchComponentAction
  | CloseSearchComponentAction;

export interface OpenBiographyComponentAction extends Action<string> {}
export interface CloseBiographyComponentAction extends Action<string> {}
export interface OpenMultimediaComponentAction extends Action<string> {
  payload: {
    date: string;
  };
}
export interface CloseMultimediaComponentAction extends Action<string> {}
export interface OpenSearchComponentAction extends Action<string> {}
export interface CloseSearchComponentAction extends Action<string> {}

export function openBiographyComponent(): OpenBiographyComponentAction {
  return {
    type: constants.OPEN_BIOGRAPHY_COMPONENT
  };
}

export function closeBiographyComponent(): CloseBiographyComponentAction {
  return {
    type: constants.CLOSE_BIOGRAPHY_COMPONENT
  };
}

export function openMultimediaComponent(
  prams: OpenMultimediaComponentAction["payload"]
) {
  return {
    type: constants.OPEN_MULTIMEDIA_COMPONENT,
    payload: prams
  };
}

export function closeMultimediaComponent(): CloseMultimediaComponentAction {
  return {
    type: constants.CLOSE_MULTIMEDIA_COMPONENT
  };
}

export function openSearchComponent(): OpenSearchComponentAction {
  return {
    type: constants.OPEN_SEARCH_COMPONENT
  };
}

export function closeSearchComponent(): CloseSearchComponentAction {
  return {
    type: constants.CLOSE_SEARCH_COMPONENT
  };
}
