import * as React from "react";
import Coordinates from "src/dataTypes/Coordinates";
import mapStyle from "./mapStyle";
import Profile from "src/dataTypes/Profile";
import ReactMapGL, { FlyToInterpolator, LinearInterpolator, MapEvent } from "react-map-gl";
import SearchBox from "./SearchBox";
import {
  Button,
  Modal,
  Popover,
  Typography
  } from "@material-ui/core";
import { containerMargin } from "./styles";
import { easeCubic } from "d3-ease";
import { fromJS } from "immutable";
import { Props, State } from "./types";



export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const center = this.props.center;

    this.state = {
      isPopoverOpen: false,
      popoverAnchorPosition: { x: 0, y: 0 },
      prevCenter: this.props.center,
      profile: initialProfile,
      viewport: {
        latitude: center.lat,
        longitude: center.lon,
        zoom: 10
      }
    };
  }

  handlePopoverClose = () => {
    this.setState({ isPopoverOpen: false });
  };

  loadProfile = (profile: Profile) => {
    this.props.getActiveProfile(profile);
    this.setState({ isPopoverOpen: false });
  };

  flyToNewDestination = (coordinates: Coordinates) => {
    const viewport = {
      ...this.state.viewport,
      latitude: coordinates.lat,
      longitude: coordinates.lon,
      transitionDuration: 5000,
      transitionInterpolator: new FlyToInterpolator(),
      transitionEasing: easeCubic
    };

    this.setState({ viewport });
  };

  handleNewCenter = () => {
    const { center } = this.props;
    this.flyToNewDestination(center);
    this.setState({ prevCenter: center });
  };

  handleMapClick = (event: any) => {
    const { features, lngLat } = event;
    if (features) {
      features.find(
        (f: any) => f.layer.id === "clusters" || f.layer.id === "cluster-count"
      ) && this.handleClusterClick(lngLat, this.state.viewport.zoom + 1);

      const unclusteredPoint = features.find(
        (f: any) => f.layer.id === "unclustered-point"
      );
      if (unclusteredPoint) {
        const { available, reg_no, name, battalion } = unclusteredPoint[
          "properties"
        ];
        this.handleProfileClick(event.center, {
          available,
          reg_no,
          name,
          battalion
        });
      }
    }
  };

  handleClusterClick = (lngLat: [number, number], zoom: number) => {
    const viewport = {
      ...this.state.viewport,
      longitude: lngLat[0],
      latitude: lngLat[1],
      zoom: zoom,
      transitionDuration: 1000,
      transitionInterpolator: new LinearInterpolator(),
      transitionEasing: easeCubic
    };

    this.setState({ viewport });
  };

  handleProfileClick = (
    markerCenter: { x: number; y: number },
    selectedProfile: Profile
  ) => {
    this.setState({
      isPopoverOpen: true,
      popoverAnchorPosition: markerCenter,
      profile: selectedProfile
    });
  };

  public render() {
    const { classes, isOpen, center, closeComponent } = this.props;
    const {
      isPopoverOpen,
      popoverAnchorPosition,
      prevCenter,
      profile,
      viewport
    } = this.state;

    if (center !== prevCenter) this.handleNewCenter();

    return (
      <Modal open={isOpen} onClose={closeComponent}>
        <div className={classes.root}>
          <ReactMapGL
            mapboxApiAccessToken={process.env.REACT_APP_MapboxAccessToken}
            {...mapDefaultAttributes}
            {...viewport}
            onViewportChange={viewport => {
              this.setState({ viewport });
            }}
            mapStyle={mapStyle}
            onClick={this.handleMapClick}
          >
            <Popover
              open={isPopoverOpen}
              anchorReference="anchorPosition"
              anchorPosition={{
                top: popoverAnchorPosition.y,
                left: popoverAnchorPosition.x
              }}
              onClose={this.handlePopoverClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "center"
              }}
            >
              <Typography className={classes.popoverText}>
                {profile.name}
                <br />
                {profile.battalion}
                <br />
                (reg_no: {profile.reg_no})
              </Typography>
              <Button
                className={classes.popoverButton}
                onClick={() => this.loadProfile(profile)}
                disabled={!profile.available}
                variant="contained"
              >
                {profile.available ? "Load Profile" : "Not Available"}
              </Button>
            </Popover>
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

const initialProfile = {
  available: false,
  reg_no: "",
  name: "",
  battalion: ""
};
