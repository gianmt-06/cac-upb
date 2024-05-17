import AbstractClient from "../../../model/Client/AbstractClient";

export default interface GetClientServicePort {
  getClient(id: string): Promise<AbstractClient>
}
  
