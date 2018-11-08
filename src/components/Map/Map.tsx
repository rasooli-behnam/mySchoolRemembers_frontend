import * as React from "react";
import Coordinates from "src/dataTypes/Coordinates";
import Marker from "./Marker";
import ReactMapGL, { FlyToInterpolator, HTMLOverlay, HTMLRedrawOptions } from "react-map-gl";
import { easeCubic } from "d3-ease";
import { parseCoordinates } from "src/utils";
import { Props, State } from "./types";

export default class Map extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialCoordinates = parseCoordinates(props.currentEvent.coords);

    this.state = {
      viewport: {
        latitude: initialCoordinates.lat,
        longitude: initialCoordinates.lon,
        zoom: 7
      },
      marker: {
        latitude: initialCoordinates.lat,
        longitude: initialCoordinates.lon
      }
    };
  }

  flyToNewDestination = (coordinates: Coordinates) => {
    const viewport = {
      ...this.state.viewport,
      latitude: coordinates.lat,
      longitude: coordinates.lon,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    };
    const marker = {
      latitude: coordinates.lat,
      longitude: coordinates.lon
    };

    this.setState({ viewport, marker });
  };

  handleRedraw = (data: HTMLRedrawOptions) => {
    const { openMultimediaComponent } = this.props;
    const { date, image, name } = this.props.currentEvent;
    const [x, y] = data.project([
      this.state.marker.longitude,
      this.state.marker.latitude
    ]);

    return (
      <Marker
        image={image}
        onClick={() => openMultimediaComponent({ date: date })}
        position={{ x: x, y: y }}
        title={name}
      />
    );
  };

  handleTimelineChange = () => {
    const newCoordinates = parseCoordinates(this.props.currentEvent.coords);
    this.props.mapStartedToFly();
    this.flyToNewDestination(newCoordinates);
  };

  public render() {
    if (this.props.isTimelineChanged) this.handleTimelineChange();

    return (
      <ReactMapGL
        // mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
        mapboxApiAccessToken={
          "pk.eyJ1IjoicmFzb29saS1iZWhuYW0iLCJhIjoiY2psaDl5ajd6MHVmbTNrcGtiY3VxZGQ5diJ9.qars2_NNloH9bcNMUEfHBA"
        }
        {...mapDefaultAttributes}
        {...this.state.viewport}
        // mapStyle={process.env.REACT_APP_MapboxMapStyleLink}
        mapStyle={"mapbox://styles/rasooli-behnam/cjlhd40vz03bm2rofi78mrqq1"}
        onViewportChange={viewport => {
          this.setState({ viewport });
        }}
        onTransitionEnd={() => this.props.mapStoppedFlying()}
      >
        <HTMLOverlay captureClick redraw={this.handleRedraw} />
      </ReactMapGL>
    );
  }
}

const mapDefaultAttributes = {
  width: window.innerWidth,
  height: window.innerHeight,
  scrollZoom: false,
  dragPan: false,
  dragRotate: false,
  doubleClickZoom: false,
  touchZoom: false
};
