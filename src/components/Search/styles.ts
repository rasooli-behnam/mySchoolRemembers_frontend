import { createStyles } from "@material-ui/core";

export const containerMargin = 100;

const styles = createStyles({
  root: {
    position: "absolute",
    top: containerMargin / 2,
    left: containerMargin / 2,
    height: window.innerHeight - containerMargin,
    width: window.innerWidth - containerMargin
  },
  markerButton: {
    backgroundColor: "#fcf79c",
    fontWeight: "bold"
  }
});

export default styles;
