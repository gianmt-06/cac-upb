import UserController from "../express/controller/UserController";

import ExpressRouter from "../../../../express/route/ExpressRouter";
import UserRouter from "../express/router/UserRouter";
import Database from "../../../../postgresql/database/Database";

import CreateUserService from "../../application/service/CreateUser/CreateUserService";
import CreateUserUseCase from "../../application/usecase/CreateUser/CreateUserUseCase";
import CreateUserRepository from "../repository/CreateUser/CreateUserRepository";

import GetUserRepository from "../repository/GetUser/GetUserRepository";
import UserRepository from "../repository/UserRepository/UserRepository";
import GetUserUseCase from "../../application/usecase/GetUser/GetUserUseCase";
import GetUserService from "../../application/service/GetUser/GetUserService";
import GetLocationRepository from "../../../location/infrastructure/repository/GetLocation/GetLocationRepository";
import LocationRepository from "../../../location/infrastructure/repository/LocationRepository/LocationRepository";
import Hasher from "../../../../auth/Hasher/Hasher";
import LogInRepository from "../repository/LogIn/LogInRepository";
import LogInService from "../../application/service/LogIn/LogInService";
import LogInUseCase from "../../application/usecase/LogIn/LogInUseCase";

export default class UserFactory {
    
    public static createRouter = () : ExpressRouter => {
        const database = Database.getInstance();

        const userRepository = new UserRepository(database);
        const locationRepository = new LocationRepository(database);
        const hasherManager = new Hasher();

        const createUserRepo = new CreateUserRepository(userRepository, hasherManager);
        const createUserService = new CreateUserService(createUserRepo);
        const createUserUseCase = new CreateUserUseCase(createUserService);

        const getLocationRepo = new GetLocationRepository(locationRepository)
        
        const getUserRepo = new GetUserRepository(userRepository, getLocationRepo);
        const getUserService = new GetUserService(getUserRepo);
        const getUserUseCase = new GetUserUseCase(getUserService);

        const logInUserRepo = new LogInRepository(userRepository, hasherManager);
        const logInService = new LogInService(logInUserRepo);
        const logInUseCase = new LogInUseCase(logInService);

        const userController = new UserController(
            createUserUseCase,
            getUserUseCase,
            logInUseCase
        )

        return new UserRouter(userController)
    }
    
}