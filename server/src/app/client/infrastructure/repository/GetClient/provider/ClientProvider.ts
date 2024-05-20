import AbstractClient from "../../../../domain/model/Client/AbstractClient";
import Client from "../../../../domain/model/Client/Client";
import ClientDTO from "../../../../domain/model/ClientDTO/ClientDTO";

export default class ClientProvider {
    public getClient = (databaseClient: ClientDTO): AbstractClient => {
        
        return new Client(
            databaseClient.name,
            databaseClient.lastname,
            databaseClient.docnumber,
            databaseClient.doctype,
            {
                id: databaseClient.idtype,
                description: databaseClient.idtype
            },
            new Date(databaseClient.birth),
            databaseClient.id
        )
    }
}