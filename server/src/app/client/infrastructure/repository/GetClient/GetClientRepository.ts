
import AbstractClient from '../../../domain/model/Client/AbstractClient'
import Client from '../../../domain/model/Client/Client';
import NullClient from '../../../domain/model/Client/NullClient';
import { ClientRepositoryPort } from '../../../domain/port/driven/ClientRepository/UserRepositoryPort'
import GetClientRepositoryPort from '../../../domain/port/driven/GetClient/GetClientRepositoryPort'

export default class GetClientRepository implements GetClientRepositoryPort {

  constructor(private readonly clientRepository: ClientRepositoryPort) {}
  
  getClient = async (id: string): Promise<AbstractClient> => {
    try {
      const databaseClient = await this.clientRepository.getOne(id);

      if(databaseClient) {
        return new Client(
          databaseClient.name,
          databaseClient.lastname,
          databaseClient.docnumber,
          {
            id: databaseClient.idtype,
            description: databaseClient.idtype
          },
          new Date(databaseClient.birth),
          databaseClient.id
        )
      }

      return new NullClient();
    } catch (error) {
      return new NullClient();
    }
  }
}
  
