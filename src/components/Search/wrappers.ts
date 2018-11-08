import styles from "./styles";
import theComponent from "./Search";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppState } from "src/reducers";
import { closeSearchComponent } from "src/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapAppStateToProps = (appState: AppState) => ({
  isOpen: appState.componentsVisibility.isSearchOpen,
  initialCoordinates: appState.activeProfile.bio.coords,
  profiles: appState.profiles
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeComponent: () => dispatch(closeSearchComponent())
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(theComponentWithStyles);
