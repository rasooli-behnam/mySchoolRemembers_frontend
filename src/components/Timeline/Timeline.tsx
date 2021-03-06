import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Slider from "rc-slider";
import { Props } from "./types";
import "rc-slider/assets/index.css";

export default class Timeline extends React.Component<Props> {
  public render() {
    const { classes, dates, onChange, isDisabled } = this.props;
    return (
      <Paper className={classes.root}>
        <Slider
          className={classes.slider}
          vertical
          included
          dots
          marks={dates}
          min={0}
          max={Object.keys(dates).length - 1}
          onChange={(index: number) => onChange({ eventIndex: index })}
          disabled={isDisabled}
        />
      </Paper>
    );
  }
}
