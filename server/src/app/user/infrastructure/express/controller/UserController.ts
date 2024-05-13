import { Request, Response } from "express"
import UserDTO from "../../../domain/model/userDTO/UserDTO"
import GetUserUseCasePort from "../../../domain/port/driver/GetUser/GetUserUseCasePort";
import CreateUserUseCasePort from "../../../domain/port/driver/CreateUser/CreateUserUseCasePort";

export default class UserController {
    constructor(
        private readonly createUserUseCase: CreateUserUseCasePort,
        private readonly getUserUseCase: GetUserUseCasePort
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
}