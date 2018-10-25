import { createStyles } from "@material-ui/core";

const buttonMargin = 25;

const styles = createStyles({
  buttonsContainer: {
    position: "absolute",
    top: buttonMargin,
    right: buttonMargin
  },
  button: {
    backgroundColor: "#fcf79c",
    fontWeight: "bold",
    width: 120
  }
});

export default styles;
