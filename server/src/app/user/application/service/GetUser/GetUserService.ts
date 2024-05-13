
import AbstractUser from '../../../domain/model/user/AbstractUser'
import GetUserRepositoryPort from '../../../domain/port/driven/GetUser/GetUserRepositoryPort'
import GetUserServicePort from '../../../domain/port/driver/GetUser/GetUserServicePort'

export default class GetUserService implements GetUserServicePort {
  name: string

  constructor(
    private readonly getUserRepository: GetUserRepositoryPort
  ) {
    this.name = 'GetUserService'
  }
  
  getUserById = async (id: string): Promise<AbstractUser> => {
    return await this.getUserRepository.getUserById(id);
  }
}
  
