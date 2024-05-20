
import HasherManagerPort from '../../../../../auth/Hasher/domain/port/driven/HasherManagerPort';
import LogInRepositoryPort from '../../../domain/port/driven/LogIn/LogInRepositoryPort'
import { UserRepositoryPort } from '../../../domain/port/driven/UserRepository/UserRepositoryPort';

export default class LogInRepository implements LogInRepositoryPort {
  constructor(
    private readonly userRepository: UserRepositoryPort,
    private readonly hasherManager: HasherManagerPort
  ) {
  }

  public static readonly getClassName = (): string => {
    return 'LogInRepostory';
  }

  getCredentials = async (email: string, plainPassword: string): Promise<boolean> => {
    const credentials = await this.userRepository.getCredentials(email);
    return await this.hasherManager.comparePassword(plainPassword, credentials.hashPassword);
  }

}
  
