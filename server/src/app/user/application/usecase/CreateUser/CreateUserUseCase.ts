
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import CreateUserServicePort from '../../../domain/port/driver/CreateUser/CreateUserServicePort'
import CreateUserUseCasePort from '../../../domain/port/driver/CreateUser/CreateUserUseCasePort'

export default class CreateUserUseCase implements CreateUserUseCasePort {
  name: string

  constructor(
    private readonly createUserServicePort: CreateUserServicePort
  ) {
    this.name = 'CreateUserUseCase'
  }

  public createUser = async (user: UserDTO): Promise<boolean> => {
    return await this.createUserServicePort.createUser(user)
  }
}
  
