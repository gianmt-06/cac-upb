
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import CreateUserRepositoryPort from '../../../domain/port/driven/CreateUser/CreateUserRepositoryPort'
import CreateUserServicePort from '../../../domain/port/driver/CreateUser/CreateUserServicePort'

export default class CreateUserService implements CreateUserServicePort {
  name: string

  constructor(
    private readonly createUserRepository: CreateUserRepositoryPort
  ) {
    this.name = 'CreateUserService'
  }

  public createUser = async (user: UserDTO): Promise<boolean> => {
    return this.createUserRepository.createUser(user)
  }
}
  
