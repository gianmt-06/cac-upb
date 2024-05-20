import NullUser from '../../../domain/model/user/NullUser'
import AbstractUser from '../../../domain/model/user/AbstractUser'
import GetUserRepositoryPort from '../../../domain/port/driven/GetUser/GetUserRepositoryPort'
import { UserRepositoryPort } from '../../../domain/port/driven/UserRepository/UserRepositoryPort'
import User from '../../../domain/model/user/User'
import LocationProvider from '../../../../shared/infrastructure/repository/providers/LocationProvider'

export default class GetUserRepository implements GetUserRepositoryPort {
  private readonly locationProvider: LocationProvider;

  constructor(private readonly userRepository: UserRepositoryPort) {
    this.locationProvider = new LocationProvider()
  }
  
  public static readonly getClassName = (): string => {
    return 'GetUserRepository';
  }

  getUserById = async(id: string): Promise<AbstractUser> => {
    try {
      const user = await this.userRepository.getOne(id);
      const location = await this.locationProvider.getLocation(user.idlocation)
      
      return new User(
        user.id,
        user.rolid,
        user.name,
        user.lastname,
        user.docnumber,
        user.doctype,
        user.email,
        location
      )
    } catch (error) {
      return Promise.resolve(new NullUser());
    }
  }
}
  
