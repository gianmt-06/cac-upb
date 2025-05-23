
import ClientDTO from '../../../domain/model/ClientDTO/ClientDTO'
import { ClientRepositoryPort } from '../../../domain/port/driven/ClientRepository/UserRepositoryPort'
import CreateClientRepositoryPort from '../../../domain/port/driven/CreateClient/CreateClientRepositoryPort'

export default class CreateClientRepository implements CreateClientRepositoryPort {
  constructor(private readonly clientRepository: ClientRepositoryPort) {}

  createClient = async(client: ClientDTO): Promise<boolean> => {
    try {
      return await this.clientRepository.save(client)
    } catch (error) {
      return Promise.resolve(false);
    }
  }
}
  
