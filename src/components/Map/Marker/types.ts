import Position from "src/dataTypes/Position";
import styles from "./styles";
import { WithStyles } from "@material-ui/core";

export interface Props extends WithStyles<typeof styles> {
  image: string;
  onClick: () => void;
  position: Position;
  title: string;
}
