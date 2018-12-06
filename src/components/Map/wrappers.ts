import theComponent from "./Map";
import { AppState } from "src/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { mapStartedToFly, mapStoppedFlying } from "src/actions";


const mapAppStateToProps = (appState: AppState) => ({
  currentEvent: appState.activeProfile.events[appState.currentEventIndex],
  isTimelineChanged: appState.timelineState.isChanged
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  mapStartedToFly: () => dispatch(mapStartedToFly()),
  mapStoppedFlying: () => dispatch(mapStoppedFlying())
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(theComponent);
