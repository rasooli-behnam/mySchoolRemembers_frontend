import theComponent from "./App";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getActiveProfile } from "src/actions";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getActiveProfile: (reg_no: string) => dispatch(getActiveProfile(reg_no))
});

export default connect(
  null,
  mapDispatchToProps
)(theComponent);
