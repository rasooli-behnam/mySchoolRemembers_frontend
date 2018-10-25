import styles from "./styles";
import { openBiographyComponent } from "src/actions";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  openBiographyComponent: typeof openBiographyComponent;
}
