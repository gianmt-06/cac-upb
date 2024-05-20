
import Location from '../../../domain/model/location/Location'
import NullLocation from '../../../domain/model/location/NullLocation'
import GetLocationRepositoryPort from '../../../domain/port/driven/GetLocation/GetLocationRepositoryPort'
import LocationRepository from '../LocationRepository/LocationRepository'

export default class GetLocationRepository implements GetLocationRepositoryPort {
  name: string

  constructor(
    private readonly locationRepository: LocationRepository
  ) {
    this.name = 'GetLocationRepository'
  }

  public getLocation = async (id: string): Promise<Location> => {
    try {
      const location = await this.locationRepository.getOne(id);
      return new Location(
        location.id,
        location.city,
        location.state,
        location.name,
        location.address
      )
    } catch (error) {
      return new NullLocation()
    }
  }
}
  
