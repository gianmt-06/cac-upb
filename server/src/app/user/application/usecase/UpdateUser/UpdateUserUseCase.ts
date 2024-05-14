
import UserDTO from '../../../domain/model/userDTO/UserDTO'
import UpdateUserServicePort from '../../../domain/port/driver/UpdateUser/UpdateUserServicePort';
import UpdateUserUseCasePort from '../../../domain/port/driver/UpdateUser/UpdateUserUseCasePort'

export default class UpdateUserUseCase implements UpdateUserUseCasePort {
  constructor(private readonly updateUserService: UpdateUserServicePort) {}

  public static readonly getClassName = (): string => {
    return 'UpdateUserUseCase';
  }

  updateUser(id: string, partial: UserDTO): Promise<boolean> {
    return this.updateUserService.updateUser(id, partial);
  }
}
  
