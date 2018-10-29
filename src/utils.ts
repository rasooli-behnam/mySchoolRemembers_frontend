export function parseCoordinates(coordinates: string) {
  const coords = coordinates.split(",");
  return { lat: parseFloat(coords[0]), lon: parseFloat(coords[1]) };
}
