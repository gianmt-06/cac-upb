import AbstractClient from "../../../model/Client/AbstractClient";

export default interface GetClientRepositoryPort {
  getClient(id: string): Promise<AbstractClient>
}
  
