
import AbstractClient from '../../../domain/model/Client/AbstractClient'
import GetClientRepositoryPort from '../../../domain/port/driven/GetClient/GetClientRepositoryPort'
import GetClientServicePort from '../../../domain/port/driver/GetClient/GetClientServicePort'

export default class GetClientService implements GetClientServicePort {
  constructor(private readonly getClientRepository: GetClientRepositoryPort) {}

  getClientById = async(id: string): Promise<AbstractClient> => {
    return await this.getClientRepository.getClientById(id);
  }

  getClientByDocument = async(document: string): Promise<AbstractClient> => {
    return await this.getClientRepository.getClientByDocument(document);
  }
}
  
