import Repository from "../../../../../shared/infrastructure/repository/Repository";
import Response from "../../../../shared/domain/model/APIResponse/Response";
import AbstractClient from "../../../domain/model/Client/AbstractClient";
import Client from "../../../domain/model/Client/Client";
import NullClient from "../../../domain/model/Client/NullClient";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";
import GetClientRepositoryPort from "../../../domain/port/driven/GetClient/GetClientRepositoryPort";

export default class GetClientRepository implements GetClientRepositoryPort{
    constructor(private readonly clientRepository: Repository<Response<ClientDTO>>){}

    getClient = async (document: string): Promise<AbstractClient> => {
        try {
            const response = await this.clientRepository.get(`http://localhost:5001/client/document/${document}`);
            if(response.error) throw Error
            
            const client = response.data;

            return new Client(
                client.name,
                client.lastname,
                client.docNumber,
                client.docType,
                {
                    id: client.typeClient.id,
                    description: client.typeClient.description
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