
import ClientDTO from '../../../domain/model/ClientDTO/ClientDTO';
import CreateClientRepositoryPort from '../../../domain/port/driven/CreateClient/CreateClientRepositoryPort';
import CreateClientServicePort from '../../../domain/port/driver/CreateClient/CreateClientServicePort'

export default class CreateClientService implements CreateClientServicePort {
  constructor(private readonly createClientRepository: CreateClientRepositoryPort) {}

  public static readonly getClassName = (): string => {
    return 'CreateClientService';
  }

  createClient(client: ClientDTO): Promise<boolean> {
    return this.createClientRepository.createClient(client)
  }
}
  
