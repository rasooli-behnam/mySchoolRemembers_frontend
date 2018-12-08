import * as React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Props } from "./types";


class BiographyTable extends React.Component<Props> {
  render() {
    const { classes } = this.props;
    const { bio, external_resources } = this.props.profile;

    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <img width={200} height={250} src={bio.photo} />
              </TableCell>
              <TableCell>
                <h1>{bio.name}</h1>
                <h2>Regimental: {bio.reg_no}</h2>
                <h2>{bio.battalion}</h2>
                <p>{bio.summary}</p>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Attribute</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(bio)
              .filter(
                k =>
                  k !== "name" &&
                  k !== "reg_no" &&
                  k !== "battalion" &&
                  k !== "photo" &&
                  k !== "summary"
              )
              .map(k => {
                return (
                  <TableRow key={k}>
                    <TableCell>{k}</TableCell>
                    <TableCell>{bio[k]}</TableCell>
                  </TableRow>
                );
              })}
            {external_resources.map(er => {
              return (
                <TableRow key={er.name}>
                  <TableCell>{er.name}</TableCell>
                  <TableCell>
                    <a href={er.link} target="_blank">
                      link
                    </a>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default BiographyTable;
