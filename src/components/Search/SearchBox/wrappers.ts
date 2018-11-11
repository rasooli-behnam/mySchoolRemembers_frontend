import styles from "./styles";
import theComponent from "./SearchBox";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getProfiles, getSearchMapNewCenter } from "src/actions";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getMapNewCenter: (condition: string) =>
    dispatch(getSearchMapNewCenter(condition)),
  getProfiles: (filterBy: string, condition: string) =>
    dispatch(getProfiles(filterBy, condition))
});

export default connect(
  null,
  mapDispatchToProps
)(theComponentWithStyles);
