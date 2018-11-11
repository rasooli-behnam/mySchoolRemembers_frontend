import * as React from "react";
import { Button } from "@material-ui/core";
import { Marker } from "react-map-gl";
import { Props } from "./types";

export default class ProfileMarker extends React.Component<Props> {
  handleClick = (event: React.PointerEvent<HTMLButtonElement>) => {
    this.props.onClick(event.currentTarget, this.props.profile);
  };

  public render() {
    const { classes, profile } = this.props;

    return (
      <Marker latitude={profile.coords.lat} longitude={profile.coords.lon}>
        <Button
          className={
            profile.available
              ? classes.buttonAvailable
              : classes.buttonNotAvailable
          }
          onClick={this.handleClick}
          variant="contained"
          size="small"
        >
          {makeAcronym(profile.name)}
        </Button>
      </Marker>
    );
  }
}

function makeAcronym(name: string) {
  const splitedName = name.split(" ");
  return splitedName.reduce((acc, curr) => acc + curr[0], "");
}
