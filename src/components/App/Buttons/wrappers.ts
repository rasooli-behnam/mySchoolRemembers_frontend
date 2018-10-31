import styles from "./styles";
import theComponent from "./Buttons";
import withStyles from "@material-ui/core/styles/withStyles";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { openBiographyComponent, openMultimediaComponent, openSearchComponent } from "src/actions";

const theComponentWithStyles = withStyles(styles)(theComponent);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  openBiographyComponent: () => dispatch(openBiographyComponent()),
  openMultimediaComponent: (prams: any = undefined) =>
    dispatch(openMultimediaComponent(prams)),
  openSearchComponent: () => dispatch(openSearchComponent())
});

export default connect(
  null,
  mapDispatchToProps
)(theComponentWithStyles);
