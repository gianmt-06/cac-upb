
import ClientDTO from '../../../domain/model/ClientDTO/ClientDTO'
import CreateClientServicePort from '../../../domain/port/driver/CreateClient/CreateClientServicePort';
import CreateClientUseCasePort from '../../../domain/port/driver/CreateClient/CreateClientUseCasePort'

export default class CreateClientUseCase implements CreateClientUseCasePort {
  constructor(private readonly createClientService: CreateClientServicePort) {}

  public static readonly getClassName = (): string => {
    return 'CreateClientUseCase';
  }

  createClient(client: ClientDTO): Promise<boolean> {
    return this.createClientService.createClient(client);
  }
}
  
