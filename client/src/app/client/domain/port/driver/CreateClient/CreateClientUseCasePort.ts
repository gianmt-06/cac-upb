import ClientDTO from "../../../model/ClientDTO/ClientDTO";

export default interface CreateClientUseCasePort {
  createClient(client: ClientDTO): Promise<boolean>
}
  
