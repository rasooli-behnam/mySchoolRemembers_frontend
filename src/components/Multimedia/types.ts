import styles from "./styles";
import { AppState } from "src/reducers";
import { closeMultimediaComponent } from "src/actions";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  closeComponent: typeof closeMultimediaComponent;
  multimedias: AppState["multimedias"];
}

export interface State {
  photoIndex: number;
}
