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
    const { veteranBio, externalResources } = this.props.profile;

    return (
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <img width={200} height={250} src={veteranBio.Photo} />
              </TableCell>
              <TableCell>
                <h1>{veteranBio.Name}</h1>
                <h2>{veteranBio.VeteranID}</h2>
                <h3>{veteranBio.Summary}</h3>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Attribute</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(veteranBio)
              .filter(k => k !== "Photo" && k !== "Coordinates")
              .map(k => {
                return (
                  <TableRow key={k}>
                    <TableCell>{k}</TableCell>
                    <TableCell>{veteranBio[k]}</TableCell>
                  </TableRow>
                );
              })}
            {externalResources.map(er => {
              return (
                <TableRow key={er.ResourceName}>
                  <TableCell>{er.ResourceName}</TableCell>
                  <TableCell>
                    <a href={er.ResourceLink} target="_blank">
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
