import DBActionsConfig from "../../../../../postgresql/config/DatabaseActions";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";
import { ClientRepositoryPort } from "../../../domain/port/driven/ClientRepository/UserRepositoryPort";
import ClientDatabaseConection from "../../postgresql/ClientDatabaseConection";

export default class ClientRepository implements ClientRepositoryPort {
    private readonly databaseActions: DBActionsConfig;

    constructor(private readonly databaseConection: ClientDatabaseConection){
        this.databaseActions = new DBActionsConfig();
    }

    getOne!: (key: string) => Promise<ClientDTO>;
    getAll!: () => Promise<ClientDTO[]>;
    
    save = async(client: ClientDTO):  Promise<boolean> => {
        try {
            await this.databaseConection.query(
                this.databaseActions.CREATE_CLIENT,
                [
                    client.type,
                    client.docnumber,
                    client.name,
                    client.lastname,
                    client.birth,
                ]
            )
            return true;
        } catch (error) {
            throw Error
        }
    }
    update!: (key: string, partial: ClientDTO) => Promise<boolean>;
    delete!: (key: string) => Promise<boolean>;
}