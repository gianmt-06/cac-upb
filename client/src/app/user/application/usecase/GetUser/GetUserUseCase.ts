
import AbstractUser from '../../../domain/model/user/AbstractUser'
import GetUserServicePort from '../../../domain/port/driver/GetUser/GetUserServicePort'
import GetUserUseCasePort from '../../../domain/port/driver/GetUser/GetUserUseCasePort'

export default class GetUserUseCase implements GetUserUseCasePort {
  constructor(private readonly getUserService: GetUserServicePort) {}

  public static readonly getClassName = (): string => {
    return 'GetUserUseCase';
  }

  public getUserById = async (id: string): Promise<AbstractUser> => {
    return await this.getUserService.getUserById(id);
  }
}
  
