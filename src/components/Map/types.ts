import CurrentEvent from "src/dataTypes/CurrentEvent";
import { mapStartedToFly, mapStoppedFlying, openMultimediaComponent } from "src/actions";
import { Viewport } from "react-map-gl";

export interface Props {
  currentEvent: CurrentEvent;
  isTimelineChanged: boolean;
  mapStartedToFly: typeof mapStartedToFly;
  mapStoppedFlying: typeof mapStoppedFlying;
  openMultimediaComponent: typeof openMultimediaComponent;
}

export interface State {
  viewport: Viewport;
  marker: {
    latitude: number;
    longitude: number;
  };
}
