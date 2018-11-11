import styles from "./styles";
import { AppState } from "src/reducers";
import { closeSearchComponent } from "src/actions";
import { getProfiles } from "src/actions";
import { Viewport } from "react-map-gl";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  getProfiles: typeof getProfiles;
}

export interface State {
  searchCategory: string;
  searchTerm: string;
}
