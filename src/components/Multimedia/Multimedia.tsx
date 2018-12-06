import * as React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Paper,
  Typography
  } from "@material-ui/core";
import { containerWidth } from "./styles";
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
                <CardContent>
                  <Typography component="p">{m.title}</Typography>
                </CardContent>
                <img
                  src={m.src}
                  alt={m.title}
                  style={{
                    maxWidth: containerWidth,
                    position: "relative",
                    left: 0,
                    right: 0,
                    margin: "auto"
                  }}
                />
                <CardContent>
                  <Typography component="p">{m.desc}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Paper>
    );
  }
}
