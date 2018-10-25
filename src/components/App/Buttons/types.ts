import styles from "./styles";
import { openBiographyComponent, openMultimediaComponent } from "src/actions";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  openBiographyComponent: typeof openBiographyComponent;
  openMultimediaComponent: typeof openMultimediaComponent;
}
