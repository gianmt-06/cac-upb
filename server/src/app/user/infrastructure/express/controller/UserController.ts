import { Request, Response } from "express"
import UserDTO from "../../../domain/model/userDTO/UserDTO"
import GetUserUseCasePort from "../../../domain/port/driver/GetUser/GetUserUseCasePort";
import CreateUserUseCasePort from "../../../domain/port/driver/CreateUser/CreateUserUseCasePort";
import LogInUseCasePort from "../../../domain/port/driver/LogIn/LogInUseCasePort";
import Controller from "../../../../../express/controller/Controller";

export default class UserController extends Controller {
    constructor(
        private readonly createUserUseCase: CreateUserUseCasePort,
        private readonly getUserUseCase: GetUserUseCasePort,
        private readonly logInUseCase: LogInUseCasePort
    ){
        super();
    }

    //TYPE: BODY
    //rolid:number, idlocation:number, doctype:string, docnumber:string, name:string, lastname:string, email:string, password:string
    public createUser = (req: Request, res: Response): void => {
        try {
            const user = req.body as UserDTO;
            
            this.createUserUseCase.createUser(user).then(value => {
                if(value) {
                    res.status(200).json(this.responseHandler.response("Usuario registrado con exito"))
                    return;
                }
                res.status(400).json(this.responseHandler.throwError("Error al registrar el usuario"))
            })
        
        } catch (error) {
            res.status(500).json(this.responseHandler.serverError());
        }
    }

    //TYPE: PARAMS
    //idUser:number
    public getUserById = (req: Request, res: Response): void => {
        try {
            const id = req.params.idUser;
            const user = this.getUserUseCase.getUserById(id);

            user.then(value => {
                console.log(value.isNull());
                
                if(!value.isNull()) {
                    res.status(200).json(this.responseHandler.response("Usuario obtenido con exito", value))
                    return;
                }
                res.status(404).json(this.responseHandler.throwError("Usuario no registrado"))
            }).catch(_error => {
                res.status(500).json(this.responseHandler.serverError())
            })
            
        } catch (error) {
            res.status(500).json(this.responseHandler.serverError())
        }
    }

    //TYPE: BODY
    //email:string, password:string
    public logIn = (req: Request, res: Response): void => {
        try {
            const {email, password} = req.body;

            const validation = this.logInUseCase.validateUser(email, password);

            validation.then(value => {
                if(value){
                    res.status(200).json(this.responseHandler.response("Usuario obtenido con exito", {validation: true}))
                    return;
                }
                res.status(401).json(this.responseHandler.throwError("Correo o contrasena incorrectas"))
            }).catch(_error => {
                res.status(500).json(this.responseHandler.serverError());
            })
            
        } catch (error) {
            res.status(500).json(this.responseHandler.serverError());
        }
    }
}