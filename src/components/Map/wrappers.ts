import CurrentEvent from "src/dataTypes/CurrentEvent";
import theComponent from "./Map";
import { AppState } from "src/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { mapStartedToFly, mapStoppedFlying, openMultimediaComponent } from "src/actions";

const mapAppStateToProps = (appState: AppState) => ({
  currentEvent: getCurrentEvent(appState),
  isTimelineChanged: appState.timelineState.isChanged
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  mapStartedToFly: () => dispatch(mapStartedToFly()),
  mapStoppedFlying: () => dispatch(mapStoppedFlying()),
  openMultimediaComponent: (prams: any) =>
    dispatch(openMultimediaComponent(prams))
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(theComponent);

function getCurrentEvent(appState: AppState): CurrentEvent {
  const event = appState.activeProfile.events[appState.currentEventIndex];
  const image = appState.activeProfile.multimedias.find(
    m => m.date === event.date
  );
  return {
    ...event,
    image: image ? image.src : ""
  };
}
