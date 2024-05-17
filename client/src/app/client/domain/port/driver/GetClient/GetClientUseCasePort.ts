import AbstractClient from "../../../model/Client/AbstractClient";

export default interface GetClientUseCasePort {
  getClient(id: string): Promise<AbstractClient>
}
  
