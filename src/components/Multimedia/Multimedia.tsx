import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography
  } from "@material-ui/core";
import { Props, State } from "./types";

export default class Multimedia extends React.Component<Props, State> {
  public render() {
    const { classes, isOpen, closeComponent, multimedias } = this.props;
    console.log(multimedias);

    return (
      <Paper className={classes.root}>
        {multimedias.map((m, i) => {
          return (
            <Card key={i}>
              <CardActionArea>
                <CardMedia
                  className={classes.cardMedia}
                  image={m.src}
                  title={m.title}
                />
                <CardContent>
                  <Typography component="p">{m.title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Paper>
    );
  }
}
