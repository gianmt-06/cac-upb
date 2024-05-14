
import LogInRepositoryPort from '../../../domain/port/driven/LogIn/LogInRepositoryPort'
import LogInServicePort from '../../../domain/port/driver/LogIn/LogInServicePort'

export default class LogInService implements LogInServicePort {
  constructor(private readonly LogInRepository: LogInRepositoryPort){}

  validateUser = async (email: string, plainPassword: string): Promise<boolean> => {
    return this.LogInRepository.validateUser(email, plainPassword);
  }

  
}
  
