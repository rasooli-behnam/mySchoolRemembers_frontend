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

  flyToNewDestination = (coordinates: Coordinates, zoom: number) => {
    const viewport = {
      ...this.state.viewport,
      latitude: coordinates.lat,
      longitude: coordinates.lon + this.calculateMapCenterOffset(zoom),
      zoom: zoom,
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

  // smaller zoom level results in bigger offset value
  calculateMapCenterOffset = (currentZoom: number) => {
    if (currentZoom > 20 || currentZoom < 0) return 0;

    const maxZoom = 20;
    const baseOffset = 0.00008;

    return baseOffset * Math.pow(2, maxZoom - currentZoom);
  };

  handleTimelineChange = () => {
    const { coords, zoom } = this.props.currentEvent;
    this.props.mapStartedToFly();
    this.flyToNewDestination(coords, zoom);
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
  dragPan: false,
  dragRotate: false,
  doubleClickZoom: false,
  touchZoom: false
};
