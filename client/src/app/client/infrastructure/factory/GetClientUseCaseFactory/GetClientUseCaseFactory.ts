import Repository from "../../../../../shared/infrastructure/repository/Repository";
import Response from "../../../../shared/domain/model/APIResponse/Response";
import GetClientService from "../../../application/service/GetClient/GetClientService";
import GetClientUseCase from "../../../application/usecase/GetClient/GetClientUseCase";
import ClientDTO from "../../../domain/model/ClientDTO/ClientDTO";
import GetClientUseCasePort from "../../../domain/port/driver/GetClient/GetClientUseCasePort";
import GetClientRepository from "../../repository/GetClientRepository/GetClientRepository";

export default class GetClientUseCaseFactory {
    public static createUseCase = (): GetClientUseCasePort => {
        const clientRepository = new Repository<Response<ClientDTO>>;

        const getClientRepo = new GetClientRepository(clientRepository);
        const getClientService = new GetClientService(getClientRepo);
        const getClientUseCase = new GetClientUseCase(getClientService);
        
        return getClientUseCase;
    }
}