import NullUser from '../../../domain/model/user/NullUser'
import AbstractUser from '../../../domain/model/user/AbstractUser'
import GetUserRepositoryPort from '../../../domain/port/driven/GetUser/GetUserRepositoryPort'
import { UserRepositoryPort } from '../../../domain/port/driven/UserRepository/UserRepositoryPort'
import User from '../../../domain/model/user/User'
import GetLocationRepositoryPort from '../../../../location/domain/port/driven/GetLocation/GetLocationRepositoryPort'

export default class GetUserRepository implements GetUserRepositoryPort {
  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly getLocationRepository: GetLocationRepositoryPort 
  ) {}
  
  public static readonly getClassName = (): string => {
    return 'GetUserRepository';
  }

  getUserById = async(id: string): Promise<AbstractUser> => {
    try {
      const user = await this.userRepository.getOne(id);
      const location = await this.getLocationRepository.getLocation(user.idlocation)
      
      return new User(
        user.id,
        user.rolid,
        user.name,
        user.lastname,
        user.docnumber,
        user.email,
        location
      )
    } catch (error) {
      return Promise.resolve(new NullUser());
    }
  }
}
  
