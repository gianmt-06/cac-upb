
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import CreateUserRepositoryPort from '../../../domain/port/driven/CreateUser/CreateUserRepositoryPort'
import CreateUserServicePort from '../../../domain/port/driver/CreateUser/CreateUserServicePort'

export default class CreateUserService implements CreateUserServicePort {
  constructor(private readonly createUserRepository: CreateUserRepositoryPort) {}

  public static readonly getClassName = (): string => {
    return 'CreateUserService';
  }

  public createUser = async (user: UserDTO): Promise<boolean> => {
    return this.createUserRepository.createUser(user)
  }
}
  
