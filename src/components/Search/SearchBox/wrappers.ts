import styles from "./styles";
import theComponent from "./SearchBox";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { Dispatch } from "redux";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(
  null,
  mapDispatchToProps
)(theComponentWithStyles);
