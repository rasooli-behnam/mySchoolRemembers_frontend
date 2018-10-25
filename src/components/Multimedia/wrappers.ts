import styles from "./styles";
import theComponent from "./Multimedia";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppState } from "src/reducers";
import { closeMultimediaComponent } from "src/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapAppStateToProps = (appState: AppState) => ({
  isOpen: appState.componentsVisibility.isMultimediaOpen,
  profile: appState.activeProfile
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeComponent: () => dispatch(closeMultimediaComponent())
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(theComponentWithStyles);
