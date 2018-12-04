import Coordinates from "src/dataTypes/Coordinates";
import Profile from "src/dataTypes/Profile";
import styles from "./styles";
import { AppState } from "src/reducers";
import { closeSearchComponent, getActiveProfile } from "src/actions";
import { Viewport } from "react-map-gl";
import { WithStyles } from "@material-ui/core";


export interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  center: Coordinates;
  closeComponent: typeof closeSearchComponent;
  getActiveProfile: typeof getActiveProfile;
}

export interface State {
  popoverAnchorEl: HTMLElement | null;
  prevCenter: Coordinates;
  profile: Profile;
  viewport: Viewport;
}
