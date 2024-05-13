
import Location from '../../../domain/model/location/Location'
import GetLocationRepositoryPort from '../../../domain/port/driven/GetLocation/GetLocationRepositoryPort'
import GetLocationServicePort from '../../../domain/port/driver/GetLocation/GetLocationServicePort'

export default class GetLocationService implements GetLocationServicePort {
  name: string

  constructor(
    private readonly getLocationRepository: GetLocationRepositoryPort
  ) {
    this.name = 'GetLocationService'
  }

  public getLocation = async (id: string): Promise<Location> => {
    return await this.getLocationRepository.getLocation(id)
  }
}
  
