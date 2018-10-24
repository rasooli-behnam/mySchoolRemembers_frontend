import { createStyles } from "@material-ui/core";

const containerMargin = 50;

const styles = createStyles({
  root: {
    position: "absolute",
    top: containerMargin / 2,
    left: 0,
    right: 0,
    margin: "auto",
    height: window.innerHeight - containerMargin,
    maxHeight: window.innerHeight - containerMargin,
    width: window.innerWidth - containerMargin,
    maxWidth: 700,
    overflowY: "auto"
  }
});

export default styles;
