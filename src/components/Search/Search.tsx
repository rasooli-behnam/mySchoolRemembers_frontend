import * as React from "react";
import Coordinates from "src/dataTypes/Coordinates";
import Profile from "src/dataTypes/Profile";
import ProfileMarker from "./ProfileMarker";
import ReactMapGL, { FlyToInterpolator } from "react-map-gl";
import SearchBox from "./SearchBox";
import {
  Button,
  Modal,
  Popover,
  Typography
  } from "@material-ui/core";
import { containerMargin } from "./styles";
import { easeCubic } from "d3-ease";
import { Props, State } from "./types";

export default class Search extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const center = this.props.center;

    this.state = {
      popoverAnchorEl: null,
      prevCenter: this.props.center,
      profile: this.props.profiles[0],
      viewport: {
        latitude: center.lat,
        longitude: center.lon,
        zoom: 14
      }
    };
  }

  handleMarkerClick = (
    markerElement: HTMLElement,
    selectedProfile: Profile
  ) => {
    this.setState({ popoverAnchorEl: markerElement, profile: selectedProfile });
  };

  handlePopoverClose = () => {
    this.setState({ popoverAnchorEl: null });
  };

  loadProfile = (reg_no: string) => {
    this.props.getActiveProfile(reg_no);
    this.setState({ popoverAnchorEl: null });
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

  public render() {
    const { classes, isOpen, center, profiles, closeComponent } = this.props;
    const { popoverAnchorEl, prevCenter, profile, viewport } = this.state;

    if (center !== prevCenter) this.handleNewCenter();

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
            {profiles.map(p => {
              return (
                <ProfileMarker onClick={this.handleMarkerClick} profile={p} />
              );
            })}
            <Popover
              open={Boolean(popoverAnchorEl)}
              anchorEl={popoverAnchorEl}
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
              </Typography>
              <Typography className={classes.popoverText}>
                (reg_no: {profile.reg_no})
              </Typography>
              <Button
                className={classes.popoverButton}
                onClick={() => this.loadProfile(profile.reg_no)}
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
