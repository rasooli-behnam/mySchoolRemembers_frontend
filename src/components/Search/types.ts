import Coordinates from "src/dataTypes/Coordinates";
import styles from "./styles";
import { AppState } from "src/reducers";
import { closeSearchComponent } from "src/actions";
import { Viewport } from "react-map-gl";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  initialCoordinates: Coordinates;
  profiles: AppState["profiles"];
  closeComponent: typeof closeSearchComponent;
}

export interface State {
  viewport: Viewport;
}
