import Location from "../../../model/location/Location";

export default interface GetLocationsUseCasePort {
  getLocations(): Promise<Location[]>
}