import Coordinates from "./dataTypes/Coordinates";
import Event from "./dataTypes/Events";

export function reformatDate(date: string) {
  return new Date(date)
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
}
