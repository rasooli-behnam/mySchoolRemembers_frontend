import * as constants from "src/constants";
import { Action } from "redux";
const geo = require("mapbox-geocoding");

export interface GetSearchMapNewCenterAction extends Action<string> {
  payload: any;
}

export default function getProfiles(
  condition: string
): GetSearchMapNewCenterAction {
  const result = new Promise(function(resolve, reject) {
    geo.setAccessToken(
      // process.env.REACT_APP_MapboxAccessToken
      "pk.eyJ1IjoicmFzb29saS1iZWhuYW0iLCJhIjoiY2psaDl5ajd6MHVmbTNrcGtiY3VxZGQ5diJ9.qars2_NNloH9bcNMUEfHBA"
    );
    geo.geocode(
      "mapbox.places",
      `${condition}, Australia`,
      (err: any, geoData: any) => {
        if (!err) {
          resolve(geoData.features[0]);
        }
        reject(err);
      }
    );
  });

  return {
    type: constants.GET_SEARCH_MAP_CENTER,
    payload: result
  };
}
