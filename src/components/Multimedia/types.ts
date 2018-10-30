import { AppState } from "src/reducers";
import { closeMultimediaComponent } from "src/actions";

export interface Props {
  isOpen: boolean;
  closeComponent: typeof closeMultimediaComponent;
  multimedias: AppState["multimedias"];
}

export interface State {
  photoIndex: number;
}
