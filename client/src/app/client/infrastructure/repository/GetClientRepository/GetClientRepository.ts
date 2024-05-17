import Repository from "../../../../../shared/infrastructure/repository/Repository";
import AbstractClient from "../../../domain/model/Client/AbstractClient";
import Client from "../../../domain/model/Client/Client";
import NullClient from "../../../domain/model/Client/NullClient";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";
import GetClientRepositoryPort from "../../../domain/port/driven/GetClient/GetClientRepositoryPort";

export default class GetClientRepository implements GetClientRepositoryPort{
    constructor(private readonly clientRepository: Repository<ClientDTO>){}

    getClient = async (id: string): Promise<AbstractClient> => {
        try {
            const response = await this.clientRepository.get(`http://localhost:5000/client/${id}`);

            const client = response.client;
            
            return new Client(
                client.name,
                client.lastname,
                client.docNumber,
                {
                    id: client.idtype,
                    description: client.descriptiontype || ''
                },
                new Date(client.birth),
                client.idClient
            )
        } catch (error) {
            console.log('ERROR');
            
            console.log(error);
            return new NullClient();
        }
    }
}