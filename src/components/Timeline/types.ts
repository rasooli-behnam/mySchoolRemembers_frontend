import styles from "./styles";
import { timelineChanged } from "src/actions";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  dates: string[];
  isDisabled: boolean;
  onChange: typeof timelineChanged;
}
