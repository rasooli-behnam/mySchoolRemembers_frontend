import { AppState } from "src/reducers";
import { closeBiographyComponent } from "src/actions";

export interface Props {
  isOpen: boolean;
  readonly profile: AppState["activeProfile"];
  closeComponent: typeof closeBiographyComponent;
}
