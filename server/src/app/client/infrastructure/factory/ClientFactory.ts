import ExpressRouter from "../../../../express/route/ExpressRouter";
import Database from "../../../../postgresql/database/Database";
import CreateClientService from "../../application/service/CreateClient/CreateClientService";
import CreateClientUseCase from "../../application/usecase/CreateClient/CreateClientUseCase";
import ClientController from "../express/controller/UserController";
import ClientRouter from "../express/router/ClientRouter";
import ClientRepository from "../repository/ClientRepository.ts/ClientRepository";
import CreateClientRepository from "../repository/CreateClient/CreateClientRepository";

export default class ClientFactory {
    
    public static createRouter = () : ExpressRouter => {
        const database = Database.getInstance();
        const userRepository = new ClientRepository(database);

        const createClientRepo = new CreateClientRepository(userRepository);
        const createClientService = new CreateClientService(createClientRepo);
        const createClientUseCase = new CreateClientUseCase(createClientService);

        const clientController = new ClientController(
            createClientUseCase
        )

        return new ClientRouter(clientController)
    }
}