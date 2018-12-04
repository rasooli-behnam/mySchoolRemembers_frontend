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
  popoverText: {
    textAlign: "center",
    margin: "5px auto 10px",
    width: 240,
    overflowWrap: "break-word"
  },
  popoverButton: {
    backgroundColor: "#fcf79c",
    margin: "10px 60px"
  }
});

export default styles;
