import Database from "../../../../../postgresql/database/Database";
import AbstractClient from "../../../../client/domain/model/Client/AbstractClient";
import NullClient from "../../../../client/domain/model/Client/NullClient";
import GetClientRepositoryPort from "../../../../client/domain/port/driven/GetClient/GetClientRepositoryPort";
import ClientRepository from "../../../../client/infrastructure/repository/ClientRepository/ClientRepository";
import GetClientRepository from "../../../../client/infrastructure/repository/GetClient/GetClientRepository";

export default class ClientProvider {
    public getClientRepository: GetClientRepositoryPort;

    constructor(){
        this.getClientRepository = new GetClientRepository(new ClientRepository(Database.getInstance()))
    }

    public getClient = async(docNumber: string): Promise<AbstractClient> => {
        try {
            return this.getClientRepository.getClientByDocument(docNumber);
        } catch (error) {
            return new NullClient();
        }
    }

    public getClientById = async(id: string): Promise<AbstractClient> => {
        try {
            return this.getClientRepository.getClientById(id);
        } catch (error) {
            return new NullClient();
        }
    }
}