
import AbstractUser from '../../../domain/model/user/AbstractUser'
import GetUserServicePort from '../../../domain/port/driver/GetUser/GetUserServicePort'
import GetUserUseCasePort from '../../../domain/port/driver/GetUser/GetUserUseCasePort'

export default class GetUserUseCase implements GetUserUseCasePort {
  name: string

  constructor(
    private readonly getUserService: GetUserServicePort
  ) {
    this.name = 'GetUserUseCase'
  }

  public getUserById = async (id: string): Promise<AbstractUser> => {
    return await this.getUserService.getUserById(id);
  }
}
  
