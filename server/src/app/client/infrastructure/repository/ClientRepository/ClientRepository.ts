import DBActionsConfig from "../../../../../postgresql/config/DatabaseActions";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";
import { ClientRepositoryPort } from "../../../domain/port/driven/ClientRepository/UserRepositoryPort";
import ClientDatabaseConection from "../../../domain/port/driven/DatabaseConection/ClientDatabaseConection";

export default class ClientRepository implements ClientRepositoryPort {
    private readonly databaseActions: DBActionsConfig;
    
    update!: (key: string, partial: ClientDTO) => Promise<boolean>;
    getAll!: () => Promise<ClientDTO[]>;
    delete!: (key: string) => Promise<boolean>;

    constructor(private readonly databaseConection: ClientDatabaseConection){
        this.databaseActions = new DBActionsConfig();
    }

    getOne = async(key: string): Promise<ClientDTO> => {
        try {
            const { rows } = await this.databaseConection.query(
                this.databaseActions.GET_CLIENT,
                [key]
            )
            return rows[0] as ClientDTO;
        } catch (error) {
            throw Error
        }
    }
    
    save = async(client: ClientDTO):  Promise<boolean> => {
        try {
            await this.databaseConection.query(
                this.databaseActions.CREATE_CLIENT,
                [
                    client.idtype,
                    client.doctype,
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

    getByDocument = async(document: string): Promise<ClientDTO> => {
        try {
            console.log('document' + document);
            
            const { rows } = await this.databaseConection.query(
                this.databaseActions.GET_CLIENT_BY_DOC,
                [document]
            )
            return rows[0] as ClientDTO;
        } catch (error) {
            throw Error
        }
    }
    
}