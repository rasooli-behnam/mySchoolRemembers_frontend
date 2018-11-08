import styles from "./styles";
import theComponent from "./Timeline";
import withStyles from "@material-ui/core/styles/withStyles";
import { AppState } from "src/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { timelineChanged, TimelineChangedAction } from "src/actions";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapAppStateToProps = (appState: AppState) => ({
  dates: appState.activeProfile.events.map(e => e.date),
  isDisabled: appState.timelineState.isDisabled
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onChange: (prams: TimelineChangedAction["payload"]) =>
    dispatch(timelineChanged(prams))
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(theComponentWithStyles);
