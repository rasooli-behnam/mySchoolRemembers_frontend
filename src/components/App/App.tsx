import * as React from "react";
import Biography from "../Biography";
import Buttons from "./Buttons";
import { CssBaseline } from "@material-ui/core";

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Buttons />
        <Biography />
      </React.Fragment>
    );
  }
}
