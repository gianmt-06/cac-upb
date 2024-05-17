import ClientDTO from "../../../model/ClientDTO/ClientDTO";

export default interface CreateClientServicePort {
  createClient(client: ClientDTO): Promise<boolean>
}
  
