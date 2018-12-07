import * as React from "react";
import { Button, MenuItem, MenuList } from "@material-ui/core";
import { Props } from "./types";



export default class Buttons extends React.Component<Props> {
  public render() {
    const { classes, openBiographyComponent, openSearchComponent } = this.props;
    return (
      <MenuList className={classes.buttonsContainer}>
        <MenuItem className={classes.menuItem}>
          <Button
            className={classes.button}
            onClick={openBiographyComponent}
            variant={"contained"}
          >
            Biography
          </Button>
        </MenuItem>
        <MenuItem className={classes.menuItem}>
          <Button
            className={classes.button}
            onClick={openSearchComponent}
            variant={"contained"}
          >
            Search
          </Button>
        </MenuItem>
      </MenuList>
    );
  }
}
