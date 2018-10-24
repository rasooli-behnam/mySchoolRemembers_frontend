import * as React from "react";
import BiographyTable from "./BiographyTable";
import Modal from "@material-ui/core/Modal";
import { AppState } from "src/reducers";
import { connect } from "react-redux";

interface Props {
  isOpen: boolean;
  readonly profile: AppState["activeProfile"];
}

class Biography extends React.Component<Props, any> {
  handleClose = () => {};

  public render() {
    const { isOpen, profile } = this.props;

    return (
      <Modal open={isOpen} onClose={this.handleClose}>
        <BiographyTable profile={profile} />
      </Modal>
    );
  }
}

const mapAppStateToProps = (appState: AppState) => ({
  profile: appState.activeProfile
});

export default connect(mapAppStateToProps)(Biography);
