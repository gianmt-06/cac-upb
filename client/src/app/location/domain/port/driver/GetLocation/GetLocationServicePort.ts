import Location from "../../../model/location/Location";

export default interface GetLocationServicePort {
  getLocation(id: string): Promise<Location>
}
  
