
import HasherManagerPort from '../../../../../auth/Hasher/domain/port/driven/HasherManagerPort';
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import CreateUserRepositoryPort from '../../../domain/port/driven/CreateUser/CreateUserRepositoryPort'
import CreateUserServicePort from '../../../domain/port/driver/CreateUser/CreateUserServicePort'

export default class CreateUserService implements CreateUserServicePort {
  constructor(
    private readonly createUserRepository: CreateUserRepositoryPort,
    private readonly hasherManager: HasherManagerPort
    ) {}

  public static readonly getClassName = (): string => {
    return 'CreateUserService';
  }

  public createUser = async (user: UserDTO): Promise<boolean> => {
    user.password = await this.hasherManager.hashPassword(user.password)
    return await this.createUserRepository.createUser(user);
  }
}
  
