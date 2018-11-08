export default interface Profile {
  available: boolean;
  reg_no: string;
  name: string;
  coords: { lat: number; lon: number };
}
