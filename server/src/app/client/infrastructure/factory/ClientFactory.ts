import ExpressRouter from "../../../../express/route/ExpressRouter";
import Database from "../../../../postgresql/database/Database";
import CreateClientService from "../../application/service/CreateClient/CreateClientService";
import GetClientService from "../../application/service/GetClient/GetClientService";
import CreateClientUseCase from "../../application/usecase/CreateClient/CreateClientUseCase";
import GetClientUseCase from "../../application/usecase/GetClient/GetClientUseCase";
import ClientController from "../express/controller/ClientController";
import ClientRouter from "../express/router/ClientRouter";
import ClientRepository from "../repository/ClientRepository.ts/ClientRepository";
import CreateClientRepository from "../repository/CreateClient/CreateClientRepository";
import GetClientRepository from "../repository/GetClient/GetClientRepository";

export default class ClientFactory {
    
    public static createRouter = () : ExpressRouter => {
        const database = Database.getInstance();
        const userRepository = new ClientRepository(database);

        const createClientRepo = new CreateClientRepository(userRepository);
        const createClientService = new CreateClientService(createClientRepo);
        const createClientUseCase = new CreateClientUseCase(createClientService);

        const getClientRepo = new GetClientRepository(userRepository);
        const getClientService = new GetClientService(getClientRepo);
        const getClientUseCase = new GetClientUseCase(getClientService)

        const clientController = new ClientController(
            createClientUseCase,
            getClientUseCase
        )

        return new ClientRouter(clientController)
    }
}