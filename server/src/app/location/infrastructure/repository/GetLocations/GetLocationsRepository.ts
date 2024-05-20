
import Location from '../../../domain/model/location/Location'
import NullLocation from '../../../domain/model/location/NullLocation'
import GetLocationsRepositoryPort from '../../../domain/port/driven/GetLocations/GetLocationsRepositoryPort'
import { LocationRepositoryPort } from '../../../domain/port/driven/LocationRepository/LocationRepositoryPort'

export default class GetLocationsRepository implements GetLocationsRepositoryPort {
  constructor(private readonly getLocationsRepository: LocationRepositoryPort) {}

  getLocations = async (): Promise<Location[]> => {
    try {
      const databaseLocations = await this.getLocationsRepository.getAll();

      const locations = databaseLocations.map(async (databaseLocation): Promise<Location> => {
          
        if(!databaseLocation) return new NullLocation()
          return new Location(
            databaseLocation.id,
            databaseLocation.city,
            databaseLocation.state,
            databaseLocation.name,
            databaseLocation.address
          )
      })

      return Promise.all(locations);
    } catch (_error) {
      return Promise.resolve([new NullLocation()]);
    }
  }
}
  
