import { createStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    position: "absolute",
    top: -30,
    left: 0,
    right: 0,
    margin: "auto",
    width: 560
  },
  textField: {
    width: 200,
    marginRight: 20,
    marginLeft: 10
  },
  searchButton: {
    backgroundColor: "#fcf79c",
    fontWeight: "bold",
    height: 54,
    position: "absolute",
    bottom: 10
  },
  menu: {
    width: 200
  }
});

export default styles;
