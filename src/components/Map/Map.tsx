import * as React from "react";
import Coordinates from "src/dataTypes/Coordinates";
import mapMarker from "src/mapMarker.png";
import ReactMapGL, {
  FlyToInterpolator,
  HTMLOverlay,
  HTMLRedrawOptions,
  Marker
  } from "react-map-gl";
import { easeCubic } from "d3-ease";
import { Props, State } from "./types";



export default class Map extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const initialCoordinates = props.currentEvent.coords;

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

  handleTimelineChange = () => {
    const newCoordinates = this.props.currentEvent.coords;
    this.props.mapStartedToFly();
    this.flyToNewDestination(newCoordinates);
  };

  public render() {
    if (this.props.isTimelineChanged) this.handleTimelineChange();

    const { longitude, latitude } = this.state.marker;

    return (
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
        {...mapDefaultAttributes}
        {...this.state.viewport}
        mapStyle={process.env.REACT_APP_MapboxMapStyleLink}
        onViewportChange={viewport => {
          this.setState({ viewport });
        }}
        onTransitionEnd={() => this.props.mapStoppedFlying()}
      >
        <Marker
          longitude={longitude}
          latitude={latitude}
          offsetLeft={-16}
          offsetTop={-32}
        >
          <img src={mapMarker} height={32} width={32} />
        </Marker>
      </ReactMapGL>
    );
  }
}

const mapDefaultAttributes = {
  width: window.innerWidth,
  height: window.innerHeight,
  scrollZoom: false,
  dragPan: true,
  dragRotate: false,
  doubleClickZoom: false,
  touchZoom: false
};
