import { Router } from "express";
import ExpressRouter from "../../../../../express/route/ExpressRouter";
import UserController from "../controller/UserController";

export default class UserRouter implements ExpressRouter {
    router: Router;
    path: string;
    version: string;

    constructor (
        private readonly userController: UserController 
    ) {
        this.router = Router();
        this.path = '/user'
        this.version = 'v1.0'
        this.setRoutes();  
    }

    setRoutes = () => {
        this.router.post('/create', this.userController.createUser.bind(this.userController))
        this.router.post('/login', this.userController.logIn.bind(this.userController))
        this.router.get('/:idUser', this.userController.getUserById.bind(this.userController))
    };

}