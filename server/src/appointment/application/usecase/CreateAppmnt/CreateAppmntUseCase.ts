
import CreateAppmntUseCasePort from '../../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort'

export default class CreateAppmntUseCase implements CreateAppmntUseCasePort {
  name: string

  constructor() {
    this.name = 'CreateAppmntUseCase'
  }

  public execute = async (): Promise<string> => {
    return 'Hello from CreateAppmntUseCase'
  }
}
  
