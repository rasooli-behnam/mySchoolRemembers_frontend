import theComponent from "./Multimedia";
import { AppState } from "src/reducers";
import { closeMultimediaComponent } from "src/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const mapAppStateToProps = (appState: AppState) => ({
  isOpen: appState.componentsVisibility.isMultimediaOpen,
  multimedias: appState.multimedias
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeComponent: () => dispatch(closeMultimediaComponent())
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(theComponent);
