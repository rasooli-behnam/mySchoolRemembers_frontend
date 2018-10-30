import { createStyles } from "@material-ui/core";

const containerMargin = 50;

const styles = createStyles({
  root: {
    position: "absolute",
    top: containerMargin / 2,
    left: containerMargin / 2,
    backgroundColor: "#fffbce",
    width: 100,
    padding: 15,
    opacity: 0.85,
    fontWeight: "bold"
  },
  slider: {
    height: window.innerHeight - containerMargin * 1.6
  }
});

export default styles;
