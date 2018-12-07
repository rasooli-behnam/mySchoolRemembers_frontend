import { createStyles } from "@material-ui/core";

const buttonMargin = 10;

const styles = createStyles({
  buttonsContainer: {
    position: "absolute",
    top: buttonMargin,
    left: buttonMargin,
    padding: 0
  },
  menuItem: {
    padding: "9px 0px"
  },
  button: {
    backgroundColor: "#fcf79c",
    fontWeight: "bold",
    fontSize: 12,
    width: 80,
    opacity: 0.8
  }
});

export default styles;
