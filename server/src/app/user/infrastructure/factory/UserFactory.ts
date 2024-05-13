import UserController from "../express/controller/UserController";

import ExpressRouter from "../../../../express/route/ExpressRouter";
import UserRouter from "../express/router/UserRouter";
import Database from "../../../../postgresql/database/Database";

import CreateUserService from "../../application/service/CreateUser/CreateUserService";
import CreateUserUseCase from "../../application/usecase/CreateUser/CreateUserUseCase";
import CreateUserRepository from "../repository/CreateUser/CreateUserRepository";

import GetUserRepository from "../repository/GetUser/GetUserRepository";
import UserRepository from "../repository/UserRepository";
import GetUserUseCase from "../../application/usecase/GetUser/GetUserUseCase";
import GetUserService from "../../application/service/GetUser/GetUserService";
import GetLocationRepository from "../../../location/infrastructure/repository/GetLocation/GetLocationRepository";
import LocationRepository from "../../../location/infrastructure/repository/LocationRepository";

export default class UserFactory {
    
    public static createRouter = () : ExpressRouter => {
        const database = Database.getInstance();

        const userRepository = new UserRepository(database);
        const locationRepository = new LocationRepository(database);

        const createUserRepo = new CreateUserRepository(userRepository);
        const createUserService = new CreateUserService(createUserRepo);
        const createUserUseCase = new CreateUserUseCase(createUserService);

        const getLocationRepo = new GetLocationRepository(locationRepository)
        
        const getUserRepo = new GetUserRepository(userRepository, getLocationRepo);
        const getUserService = new GetUserService(getUserRepo);
        const getUserUseCase = new GetUserUseCase(getUserService);

        const userController = new UserController(
            createUserUseCase,
            getUserUseCase
        )

        return new UserRouter(userController)
    }
    
}