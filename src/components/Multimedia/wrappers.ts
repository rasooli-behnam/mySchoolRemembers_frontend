import styles from "./styles";
import theComponent from "./Multimedia";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppState } from "src/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapAppStateToProps = (appState: AppState) => ({
  isOpen: appState.componentsVisibility.isMultimediaOpen,
  multimedias: appState.multimedias
});

export default connect(mapAppStateToProps)(theComponentWithStyles);
