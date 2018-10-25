import * as React from "react";
import BiographyTable from "./BiographyTable";
import Modal from "@material-ui/core/Modal";
import { Props } from "./types";

export default class Biography extends React.Component<Props> {
  public render() {
    const { isOpen, profile, closeComponent } = this.props;

    return (
      <Modal open={isOpen} onClose={closeComponent}>
        <BiographyTable profile={profile} />
      </Modal>
    );
  }
}
