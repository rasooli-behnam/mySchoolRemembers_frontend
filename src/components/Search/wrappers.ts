import Profile from "src/dataTypes/Profile";
import styles from "./styles";
import theComponent from "./Search";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppState } from "src/reducers";
import { closeSearchComponent, getActiveProfile } from "src/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";


const theComponentWithStyles = withStyles(styles)(theComponent);

const mapAppStateToProps = (appState: AppState) => ({
  isOpen: appState.componentsVisibility.isSearchOpen,
  center: appState.searchMapCenter
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeComponent: () => dispatch(closeSearchComponent()),
  getActiveProfile: (profile: Profile) => dispatch(getActiveProfile(profile))
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(theComponentWithStyles);
