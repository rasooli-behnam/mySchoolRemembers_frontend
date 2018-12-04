import Coordinates from "./dataTypes/Coordinates";

export function reformatDate(date: string) {
  return new Date(date)
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
}
