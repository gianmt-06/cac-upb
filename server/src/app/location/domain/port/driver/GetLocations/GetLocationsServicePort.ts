import Location from "../../../model/location/Location";

export default interface GetLocationsServicePort {
  getLocations(): Promise<Location[]>
}
  
