
import Location from '../../../domain/model/location/Location'
import GetLocationServicePort from '../../../domain/port/driver/GetLocation/GetLocationServicePort'
import GetLocationUseCasePort from '../../../domain/port/driver/GetLocation/GetLocationUseCasePort'

export default class GetLocationUseCase implements GetLocationUseCasePort {
  name: string

  constructor(
    private readonly getLocationService: GetLocationServicePort
  ) {
    this.name = 'GetLocationUseCase'
  }

  public getLocation = async (id: string): Promise<Location> => {
    return this.getLocationService.getLocation(id);
  }
}
  
