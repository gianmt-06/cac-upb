import Repository from "../../../../../shared/infrastructure/repository/Repository";
import ClientDTO from "../../../model/ClientDTO/ClientDTO";

export interface ClientRepositoryPort extends Repository<ClientDTO, string> {
    getByDocument(document: string): Promise<ClientDTO>
}