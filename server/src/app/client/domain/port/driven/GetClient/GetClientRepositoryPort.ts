import AbstractClient from "../../../model/Client/AbstractClient";

export default interface GetClientRepositoryPort {
  getClientById(id: string): Promise<AbstractClient>;
  getClientByDocument(document: string): Promise<AbstractClient>;
}
  
