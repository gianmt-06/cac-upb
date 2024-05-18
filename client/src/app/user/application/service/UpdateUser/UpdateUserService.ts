
import UserDTO from '../../../domain/model/userDTO/UserDTO';
import UpdateUserRepositoryPort from '../../../domain/port/driven/UpdateUser/UpdateUserRepositoryPort';
import UpdateUserServicePort from '../../../domain/port/driver/UpdateUser/UpdateUserServicePort'

export default class UpdateUserService implements UpdateUserServicePort {
  constructor(private readonly updateUserRepository: UpdateUserRepositoryPort) {}
  
  public static readonly getClassName = (): string => {
    return 'UpdateUserService';
  }
  
  updateUser(id: string, partial: UserDTO): Promise<boolean> {
    return this.updateUserRepository.updateUser(id, partial);
  }
}
  
