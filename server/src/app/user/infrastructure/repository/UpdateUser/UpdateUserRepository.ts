
import UserDTO from '../../../domain/model/userDTO/UserDTO';
import UpdateUserRepositoryPort from '../../../domain/port/driven/UpdateUser/UpdateUserRepositoryPort'
import { UserRepositoryPort } from '../../../domain/port/driven/UserRepository/UserRepositoryPort';

export default class UpdateUserRepository implements UpdateUserRepositoryPort {
  constructor(private readonly userRepository: UserRepositoryPort) {}
  
  public static readonly getClassName = (): string => {
    return 'UpdateUserRepostory';
  }

  updateUser(id: string, partial: UserDTO): Promise<boolean> {
    return this.userRepository.update(id, partial);
  }
}
  
