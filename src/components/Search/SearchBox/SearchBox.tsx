import * as React from "react";
import {
  Button,
  MenuItem,
  Paper,
  TextField
  } from "@material-ui/core";
import { Props, State } from "./types";

export default class SearchBox extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      searchCategory: catergories[0],
      searchTerm: ""
    };
  }

  handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { searchCategory, searchTerm } = this.state;
    this.props.findProfiles({ searchCategory, searchTerm });
  };

  handleSearchCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchCategory: event.target.value });
  };

  handleSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  public render() {
    const { classes } = this.props;
    const { searchCategory, searchTerm } = this.state;

    return (
      <Paper className={classes.root}>
        <form onSubmit={this.handleFormSubmit} noValidate autoComplete="off">
          <TextField
            select
            label="Category"
            className={classes.textField}
            value={searchCategory}
            onChange={this.handleSearchCategoryChange}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            margin="normal"
            variant="outlined"
          >
            {catergories.map(cat => (
              <MenuItem key={cat} value={cat}>
                {cat}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label="Search field"
            type="search"
            className={classes.textField}
            autoFocus={true}
            value={this.state.searchTerm}
            onChange={this.handleSearchTermChange}
            margin="normal"
            variant="outlined"
          />
          <Button
            type="submit"
            className={classes.searchButton}
            variant="contained"
          >
            Search
          </Button>
        </form>
      </Paper>
    );
  }
}

const catergories = ["Name", "City", "State", "Postcode"];
