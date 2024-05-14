import { Request, Response } from "express"
import UserDTO from "../../../domain/model/userDTO/UserDTO"
import GetUserUseCasePort from "../../../domain/port/driver/GetUser/GetUserUseCasePort";
import CreateUserUseCasePort from "../../../domain/port/driver/CreateUser/CreateUserUseCasePort";
import LogInUseCasePort from "../../../domain/port/driver/LogIn/LogInUseCasePort";

export default class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCasePort,
        private readonly getUserUseCase: GetUserUseCasePort,
        private readonly logInUseCase: LogInUseCasePort
    ){}

    public createUser = (req: Request, res: Response): void => {
        try {
            const user = req.body as UserDTO;
            
            this.createUserUseCase.createUser(user)
        
            res.status(200).json({created: true})
        } catch (error) {
            res.status(500).json({error: true})
        }
    }

    public getUserById = (req: Request, res: Response): void => {
        try {
            const id = req.params.idUser;
            const user = this.getUserUseCase.getUserById(id);

            user.then(value => {
                res.status(200).json({user: value})
            })
            
        } catch (error) {
            res.status(500).json({error: true})
        }
    }

    public logIn = (req: Request, res: Response): void => {
        try {
            const {email, password} = req.body;

            const user = this.logInUseCase.validateUser(email, password);

            user.then(value => {
                if(value){
                    res.status(200).json({validate: true, message: "Usuario validado con exito"})
                } else {
                    res.status(401).json({validate: false, message: "Error al validar usuario"})
                }
            })
            
        } catch (error) {
            res.status(500).json({error: true})
        }
    }
}