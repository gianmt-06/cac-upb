
import CreateUserRepositoryPort from '../../../domain/port/driven/CreateUser/CreateUserRepositoryPort'
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import { UserRepositoryInterface } from '../UserRepositoryInterface'

export default class CreateUserRepository implements CreateUserRepositoryPort {
  name: string

  constructor(
    private readonly userRepository: UserRepositoryInterface
    ) {
    this.name = 'CreateUserRepository'
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
  
