import Coordinates from "src/dataTypes/Coordinates";
import Profile from "src/dataTypes/Profile";
import styles from "./styles";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  onClick: (markerElement: HTMLElement, selectedProfile: Profile) => void;
  profile: Profile;
}
