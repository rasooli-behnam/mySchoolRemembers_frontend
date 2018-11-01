import Coordinates from "./dataTypes/Coordinates";
import Event from "./dataTypes/Events";

export function parseCoordinates(coordinates: string): Coordinates {
  const coords = coordinates.split(",");
  return { lat: parseFloat(coords[0]), lon: parseFloat(coords[1]) };
}

export function reformatDate(date: string) {
  return new Date(date)
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
}
