import theComponent from "./Biography";
import { AppState } from "src/reducers";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { closeBiographyComponent } from "src/actions";

const mapAppStateToProps = (appState: AppState) => ({
  isOpen: appState.componentsVisibility.isBiographyOpen,
  profile: appState.activeProfile
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  closeComponent: () => dispatch(closeBiographyComponent())
});

export default connect(
  mapAppStateToProps,
  mapDispatchToProps
)(theComponent);
