import Profile from "src/dataTypes/Profile";
import theComponent from "./App";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getActiveProfile } from "src/actions";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getActiveProfile: (profile: Profile) => dispatch(getActiveProfile(profile))
});

export default connect(
  null,
  mapDispatchToProps
)(theComponent);
