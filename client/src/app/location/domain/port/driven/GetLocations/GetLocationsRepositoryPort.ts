import Location from "../../../model/location/Location";

export default interface GetLocationsRepositoryPort {
  getLocations(): Promise<Location[]>
}