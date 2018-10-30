import Event from "./dataTypes/Events";

export function parseCoordinates(coordinates: string) {
  const coords = coordinates.split(",");
  return { lat: parseFloat(coords[0]), lon: parseFloat(coords[1]) };
}

export function reformatEventDate(event: Event) {
  event.Date = new Date(event.Date)
    .toJSON()
    .slice(0, 10)
    .split("-")
    .reverse()
    .join("/");
  return event;
}
