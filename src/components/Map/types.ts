import Event from "src/dataTypes/Events";
import { mapStartedToFly, mapStoppedFlying, openMultimediaComponent } from "src/actions";
import { Viewport } from "react-map-gl";


export interface Props {
  currentEvent: Event;
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
