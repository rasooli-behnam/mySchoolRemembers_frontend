import Event from "src/dataTypes/Event";
import { mapStartedToFly, mapStoppedFlying } from "src/actions";
import { Viewport } from "react-map-gl";


export interface Props {
  currentEvent: Event;
  isTimelineChanged: boolean;
  mapStartedToFly: typeof mapStartedToFly;
  mapStoppedFlying: typeof mapStoppedFlying;
}

export interface State {
  viewport: Viewport;
  marker: {
    latitude: number;
    longitude: number;
  };
}
