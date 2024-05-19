
import AbstractClient from '../../../domain/model/Client/AbstractClient'
import NullClient from '../../../domain/model/Client/NullClient';
import { ClientRepositoryPort } from '../../../domain/port/driven/ClientRepository/UserRepositoryPort'
import GetClientRepositoryPort from '../../../domain/port/driven/GetClient/GetClientRepositoryPort'
import ClientProvider from './provider/ClientProvider';

export default class GetClientRepository implements GetClientRepositoryPort {
  private clientProvider: ClientProvider;

  constructor(private readonly clientRepository: ClientRepositoryPort) {
    this.clientProvider = new ClientProvider();
  }
  
  getClientById = async (id: string): Promise<AbstractClient> => {
    try {
      const databaseClient = await this.clientRepository.getOne(id);

      if (databaseClient) return this.clientProvider.getClient(databaseClient)
      return new NullClient();
    } catch (error) {
      return new NullClient();
    }
  }

  getClientByDocument = async(document: string): Promise<AbstractClient> => {
    try {
      const databaseClient = await this.clientRepository.getOne(document);
      
      if (databaseClient) return this.clientProvider.getClient(databaseClient)
      return new NullClient();
    } catch (error) {
      return new NullClient();
    }
  }
}
  
