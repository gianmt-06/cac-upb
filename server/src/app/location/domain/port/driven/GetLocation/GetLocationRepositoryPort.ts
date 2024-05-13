import Location from "../../../model/location/Location";

export default interface GetLocationRepositoryPort {
  getLocation(id: string): Promise<Location>
}