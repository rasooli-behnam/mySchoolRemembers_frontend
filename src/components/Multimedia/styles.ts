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
  }
});

export default styles;
