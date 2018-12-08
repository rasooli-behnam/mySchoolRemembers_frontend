import { createStyles } from "@material-ui/core";

const containerMargin = 10;
const windowWidth = window.innerWidth;
export const containerWidth = windowWidth / (windowWidth > 800 ? 2 : 1.5);

const styles = createStyles({
  root: {
    position: "absolute",
    top: containerMargin,
    right: containerMargin,
    maxHeight: window.innerHeight - containerMargin * 2,
    width: containerWidth,
    overflowY: "auto"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333"
  }
});

export default styles;
