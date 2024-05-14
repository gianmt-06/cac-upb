
import CreateUserRepositoryPort from '../../../domain/port/driven/CreateUser/CreateUserRepositoryPort'
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import { UserRepositoryPort } from '../../../domain/port/driven/UserRepository/UserRepositoryPort'
import HasherManagerPort from '../../../../../auth/Hasher/domain/port/driven/HasherManagerPort';

export default class CreateUserRepository implements CreateUserRepositoryPort {

  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly hasherManager: HasherManagerPort   
  ) {}

  public static readonly getClassName = (): string => {
    return 'CreateUserRepository';
  }

  createUser = async(user: UserDTO): Promise<boolean> => {
    try {
      if(user.password){
        user.password = await this.hasherManager.hashPassword(user.password)
        await this.userRepository.save(user)
        
        return Promise.resolve(true);
      }

      throw Error;
    } catch (_error) {
      return Promise.resolve(false)      
    }
  }
}
  
