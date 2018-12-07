import { createStyles } from "@material-ui/core";

const containerMargin = 10;
const topOffset = 111; //this is for giving space to Biography and Search buttons
const bottomOffset = 23; //this is for avoiding the mapbox watermark

const styles = createStyles({
  root: {
    position: "absolute",
    top: containerMargin + topOffset - bottomOffset,
    left: containerMargin,
    backgroundColor: "#fcf79c",
    width: 80,
    padding: "10px 0px 10px 3px",
    opacity: 0.8,
    fontWeight: "bold"
  },
  slider: {
    height: window.innerHeight - topOffset - containerMargin * 4
  }
});

export default styles;
