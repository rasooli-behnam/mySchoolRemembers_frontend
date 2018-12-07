import styles from "./styles";
import { AppState } from "src/reducers";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  isOpen: boolean;
  multimedias: AppState["multimedias"];
}

export interface State {}
