
import AbstractClient from '../../../domain/model/Client/AbstractClient'
import GetClientServicePort from '../../../domain/port/driver/GetClient/GetClientServicePort'
import GetClientUseCasePort from '../../../domain/port/driver/GetClient/GetClientUseCasePort'

export default class GetClientUseCase implements GetClientUseCasePort {
  constructor(private readonly getClientService: GetClientServicePort) {}
  
  getClient = async (id: string): Promise<AbstractClient> => {
    return await this.getClientService.getClient(id);
  }
}
  
