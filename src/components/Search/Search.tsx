import * as React from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import SearchBox from "./SearchBox";
import { Button, Modal } from "@material-ui/core";
import { containerMargin } from "./styles";
import { parseCoordinates } from "src/utils";
import { Props, State } from "./types";

export default class Multimedia extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialCoordinates = parseCoordinates(this.props.initialCoordinates);

    this.state = {
      viewport: {
        latitude: initialCoordinates.lat,
        longitude: initialCoordinates.lon,
        zoom: 14
      }
    };
  }

  public render() {
    const { classes, isOpen, profiles, closeComponent } = this.props;
    const { viewport } = this.state;

    return (
      <Modal open={isOpen} onClose={closeComponent}>
        <div className={classes.root}>
          <ReactMapGL
            // mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
            mapboxApiAccessToken={
              "pk.eyJ1IjoicmFzb29saS1iZWhuYW0iLCJhIjoiY2psaDl5ajd6MHVmbTNrcGtiY3VxZGQ5diJ9.qars2_NNloH9bcNMUEfHBA"
            }
            {...mapDefaultAttributes}
            {...viewport}
            onViewportChange={viewport => {
              this.setState({ viewport });
            }}
          >
            {profiles.map(vb => {
              const coords = parseCoordinates(vb.coords);
              return (
                <Marker latitude={coords.lat} longitude={coords.lon}>
                  <Button className={classes.markerButton} variant="contained">
                    {`${vb.name} (${vb.reg_no})`}
                  </Button>
                </Marker>
              );
            })}
          </ReactMapGL>
          <SearchBox />
        </div>
      </Modal>
    );
  }
}

const mapDefaultAttributes = {
  width: window.innerWidth - containerMargin,
  height: window.innerHeight - containerMargin,
  dragRotate: false
};
