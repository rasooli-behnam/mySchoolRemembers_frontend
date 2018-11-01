import * as React from "react";
import Lightbox from "react-images";
import { Props, State } from "./types";

export default class Multimedia extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      photoIndex: 0
    };
  }

  mapMultimediasToUsableItems = () => {
    return this.props.multimedias.map(m => ({
      src: m.Source,
      caption: m.Description,
      alt: m.Title
    }));
  };

  resetPhotoIndexIfLightboxClosed() {
    if (!this.props.isOpen) this.state = { photoIndex: 0 };
  }

  public render() {
    const { isOpen, closeComponent } = this.props;
    let { photoIndex } = this.state;
    const images = this.mapMultimediasToUsableItems();

    if (photoIndex > images.length) photoIndex = 0;

    return (
      <Lightbox
        currentImage={photoIndex}
        images={images}
        isOpen={isOpen}
        onClickPrev={() => this.setState({ photoIndex: photoIndex - 1 })}
        onClickNext={() => this.setState({ photoIndex: photoIndex + 1 })}
        onClose={closeComponent}
      />
    );
  }
}
