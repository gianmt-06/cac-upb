import Location from "../../../model/location/Location";

export default interface GetLocationUseCasePort {
  getLocation(id: string): Promise<Location>
}
  
