import styles from "./styles";
import { AppState } from "src/reducers";
import { closeMultimediaComponent } from "src/actions";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  closeComponent: typeof closeMultimediaComponent;
  profile: AppState["activeProfile"];
}

export interface State {
  photoIndex: number;
}
