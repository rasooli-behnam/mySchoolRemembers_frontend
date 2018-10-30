import * as React from "react";
import Biography from "../Biography";
import Buttons from "./Buttons";
import Multimedia from "../Multimedia";
import Search from "../Search";
import Timeline from "../Timeline";
import { CssBaseline } from "@material-ui/core";

export default class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Timeline />
        <Buttons />
        <Biography />
        <Multimedia />
        <Search />
      </React.Fragment>
    );
  }
}
