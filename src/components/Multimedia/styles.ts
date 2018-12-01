import { createStyles } from "@material-ui/core";

const containerMargin = 10;
const width = window.innerWidth - containerMargin * 2;
const maxWidth = 700;

const styles = createStyles({
  root: {
    position: "absolute",
    top: containerMargin,
    right: containerMargin,
    maxHeight: window.innerHeight - containerMargin * 2,
    width: width,
    maxWidth: maxWidth,
    overflowY: "auto"
  },
  cardMedia: {
    height: 800,
    width: width,
    maxWidth: maxWidth
  }
});

export default styles;
