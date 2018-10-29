import styles from "./styles";
import { openBiographyComponent, openMultimediaComponent, openSearchComponent } from "src/actions";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  openBiographyComponent: typeof openBiographyComponent;
  openMultimediaComponent: typeof openMultimediaComponent;
  openSearchComponent: typeof openSearchComponent;
}
