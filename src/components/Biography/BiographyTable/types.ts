import styles from "./styles";
import { AppState } from "src/reducers";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  profile: AppState["activeProfile"];
}
