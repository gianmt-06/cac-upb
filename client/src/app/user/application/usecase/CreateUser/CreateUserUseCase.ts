
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import CreateUserServicePort from '../../../domain/port/driver/CreateUser/CreateUserServicePort'
import CreateUserUseCasePort from '../../../domain/port/driver/CreateUser/CreateUserUseCasePort'

export default class CreateUserUseCase implements CreateUserUseCasePort {
  constructor(private readonly createUserServicePort: CreateUserServicePort) {}

  public static readonly getClassName = (): string => {
    return 'CreateUserUseCase';
  }

  public createUser = async (user: UserDTO): Promise<boolean> => {
    return await this.createUserServicePort.createUser(user)
  }
}
  
