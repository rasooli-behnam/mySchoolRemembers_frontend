import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
  } from "@material-ui/core";
import { Props } from "./types";

export default class Marker extends React.Component<Props> {
  render() {
    const { classes, image, onClick, position, title } = this.props;

    return (
      <div
        className={classes.root}
        style={{
          top: position.y - markerOffset.y,
          left: position.x - markerOffset.x
        }}
      >
        <Card>
          <CardActionArea onClick={onClick}>
            <CardMedia
              className={classes.cardMedia}
              image={image}
              title={title}
            />
            <CardContent>
              <Typography component="p">{title}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

const markerOffset = { x: 75, y: 215 };
