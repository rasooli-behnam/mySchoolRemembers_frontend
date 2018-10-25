import * as constants from "src/constants";
import { Action } from "redux";

export type ComponentsVisibilityActions =
  | OpenBiographyComponentAction
  | CloseBiographyComponentAction;

export interface OpenBiographyComponentAction extends Action<string> {}
export interface CloseBiographyComponentAction extends Action<string> {}

export function openBiographyComponent(): OpenBiographyComponentAction {
  return {
    type: constants.OPEN_BIOGRAPHY_COMPONENT
  };
}

export function closeBiographyComponent(): OpenBiographyComponentAction {
  return {
    type: constants.CLOSE_BIOGRAPHY_COMPONENT
  };
}
