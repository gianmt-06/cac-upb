import ClientDTO from "../../../model/ClientDTO/ClientDTO";

export default interface CreateClientRepositoryPort {
  createClient(client: ClientDTO): Promise<boolean>
}