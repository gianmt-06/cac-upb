
import CreateUserRepositoryPort from '../../../domain/port/driven/CreateUser/CreateUserRepositoryPort'
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import { UserRepositoryPort } from '../../../domain/port/driven/UserRepository/UserRepositoryPort'

export default class CreateUserRepository implements CreateUserRepositoryPort {

  constructor(private readonly userRepository: UserRepositoryPort) {}

  public static readonly getClassName = (): string => {
    return 'CreateUserRepository';
  }

  createUser = async(user: UserDTO): Promise<boolean> => {
    try {
      await this.userRepository.save(user)
      return Promise.resolve(true);
    } catch (_error) {
      return Promise.resolve(false)      
    }
  }
}
  
