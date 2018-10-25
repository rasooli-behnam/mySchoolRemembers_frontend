import * as React from "react";
import { Button, MenuItem, MenuList } from "@material-ui/core";
import { Props } from "./types";

export default class Buttons extends React.Component<Props> {
  public render() {
    const {
      classes,
      openBiographyComponent,
      openMultimediaComponent
    } = this.props;
    return (
      <MenuList className={classes.buttonsContainer}>
        <MenuItem>
          <Button
            className={classes.button}
            onClick={openBiographyComponent}
            variant={"contained"}
          >
            Biography
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            className={classes.button}
            onClick={openMultimediaComponent}
            variant={"contained"}
          >
            Multimedia
          </Button>
        </MenuItem>
      </MenuList>
    );
  }
}
