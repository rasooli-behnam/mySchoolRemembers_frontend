import styles from "./styles";
import theComponent from "./SearchBox";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { findProfiles, FindProfilesAction } from "src/actions";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  findProfiles: (prams: FindProfilesAction["payload"]) =>
    dispatch(findProfiles(prams))
});

export default connect(
  null,
  mapDispatchToProps
)(theComponentWithStyles);
