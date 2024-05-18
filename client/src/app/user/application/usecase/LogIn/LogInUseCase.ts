
import LogInServicePort from '../../../domain/port/driver/LogIn/LogInServicePort'
import LogInUseCasePort from '../../../domain/port/driver/LogIn/LogInUseCasePort'

export default class LogInUseCase implements LogInUseCasePort {
  constructor(private readonly LogInService: LogInServicePort){}

  validateUser = async (email: string, plainPassword: string): Promise<boolean> => {
    return await this.LogInService.validateUser(email, plainPassword);
  }
}
  
