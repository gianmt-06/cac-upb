import CreateAppmntUseCasePort from "../../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort";
import { Request, Response } from "express";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO";
import ModifyAppmntUseCasePort from "../../../domain/port/driver/ModifyAppmnt/ModifyAppmntUseCasePort";
import DeleteAppmntUseCasePort from "../../../domain/port/driver/DeleteAppmnt/DeleteAppmntUseCasePort";
import GetAppmntTypesUseCasePort from "../../../domain/port/driver/GetAppmntTypes/GetAppmntTypesUseCasePort";
import GetAppmntUseCasePort from "../../../domain/port/driver/GetAppmnt/GetAppmntUseCasePort";
import Controller from "../../../../../express/controller/Controller";

export default class AppointmentController extends Controller {
    constructor(
        private readonly getAppointmentUseCase: GetAppmntUseCasePort,
        private readonly createAppointmentUseCase: CreateAppmntUseCasePort,
        private readonly modifyAppointmentUseCase: ModifyAppmntUseCasePort,
        private readonly deleteAppointmentUseCase: DeleteAppmntUseCasePort,
        private readonly getAppmntTypesUseCase: GetAppmntTypesUseCasePort
    ){
      super();
    }

    // Type: BODY
    // code: string, docClient:string, date:string; 
    public getAppmnt = (req: Request, res: Response): void => {
      try {
          const {code, docClient, date} = req.body;

          this.getAppointmentUseCase.getAppmnt(code, docClient, new Date(date)).then((appointment) => {
            if(!appointment.isNull()){
              res.status(200).json(this.responseHandler.response("Cita obtenida con exito", appointment));
              return;
            }
            res.status(400).json(this.responseHandler.throwError("Error al obtener la cita: Datos incorrectos o cita no registrada"))
          })

      } catch (error) {
          res.status(500).json(this.responseHandler.serverError())
      }
  }

    //TYPE: QUERY
    //clientdoc:string

    // Type: BODY
    // locationid:number, idtype:number, description:string, date:string -> format:MM-DD-YY, time:string --> format:HH-MM-SS; 
    public createAppmnt = (req: Request, res: Response): void => {
        try {
            const { clientdoc } = req.query;
            const appointment = req.body as AppmntDTO;
            
            if(!clientdoc) {
              res.status(400).json(this.responseHandler.throwError("Error al agendar la cita"))
              return;
            } 

            this.createAppointmentUseCase.createAppmnt(clientdoc?.toString(), appointment).then(value => {
              if(value) {
                res.status(200).json(this.responseHandler.response("Cita agendada con exito"))
                return;
              }
              res.status(400).json(this.responseHandler.throwError("Error al agendar la cita"))
            }).catch(_error => {
              res.status(500).json(this.responseHandler.serverError());
            });

        } catch (error) {
          res.status(500).json(this.responseHandler.serverError());
        }
    }

    //TYPE: PARAMS
    // code: string 
    
    // Type: BODY
    // locationid:number, idtype:number, description:string, date:string -> format:MM-DD-YY, time:string --> format:HH-MM-SS; 
    public updateAppmnt = (req: Request, res: Response): void => {
      try {
          const code = req.params.code;
          const appointment = req.body as AppmntDTO;

          this.modifyAppointmentUseCase.modifyAppmt(code, appointment).then((value) => {
            if(value) {
              res.status(200).json(this.responseHandler.response("Cita actualizada con exito"));
              return;
            }
            res.status(400).json(this.responseHandler.throwError("Error al actualizar la cita"));
          });
          
      } catch (error) {
          res.status(500).json(this.responseHandler.serverError());
      }
    }

    //TYPE: PARAMS
    //code:string
    public deleteAppmnt = (req: Request, res: Response): void => {
      try {
          const code = req.params.code;

          this.deleteAppointmentUseCase.deleteAppmnt(code).then((value) => {
            if(value) {
              res.status(200).json(this.responseHandler.response("La cita fue cancelada con exito"));
              return;
            }
            res.status(400).json(this.responseHandler.throwError("Error al eliminar la cita"));
          });
          
      } catch (error) {
          res.status(500).json(this.responseHandler.serverError());
      }
    }

    public getAppmntTypes = (_req: Request, res: Response): void => {
      try {

          this.getAppmntTypesUseCase.getAppmntTypes().then((apponitmentTypes) => {
            res.status(200).json(this.responseHandler.response("Tipos de cita obtenidos con exito", apponitmentTypes));
          })
          
      } catch (error) {
          res.status(500).json(this.responseHandler.serverError())
      }
    }
}