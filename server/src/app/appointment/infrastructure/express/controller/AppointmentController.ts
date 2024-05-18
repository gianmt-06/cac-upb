import CreateAppmntUseCasePort from "../../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort";
import { Request, Response } from "express";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO";
import ModifyAppmntUseCasePort from "../../../domain/port/driver/ModifyAppmnt/ModifyAppmntUseCasePort";
import DeleteAppmntUseCasePort from "../../../domain/port/driver/DeleteAppmnt/DeleteAppmntUseCasePort";
import GetAppmntTypesUseCasePort from "../../../domain/port/driver/GetAppmntTypes/GetAppmntTypesUseCasePort";
import GetAppmntUseCasePort from "../../../domain/port/driver/GetAppmnt/GetAppmntUseCasePort";

export default class AppointmentController {
    constructor(
        private readonly getAppointmentUseCase: GetAppmntUseCasePort,
        private readonly createAppointmentUseCase: CreateAppmntUseCasePort,
        private readonly modifyAppointmentUseCase: ModifyAppmntUseCasePort,
        private readonly deleteAppointmentUseCase: DeleteAppmntUseCasePort,
        private readonly getAppmntTypesUseCase: GetAppmntTypesUseCasePort
    ){}

    public getAppmnt = (req: Request, res: Response): void => {
      try {
          const {code, docClient, date} = req.body;

          this.getAppointmentUseCase.getAppmnt(code, docClient, new Date(date)).then(appointment => {
            res.status(200).json(appointment);
          }).catch(error => {
            res.status(500).json(error);
          })
          
      } catch (error) {
          res.status(500).json({error: true})
      }
  }

    public createAppmnt = (req: Request, res: Response): void => {
        try {
            console.log('bodyy'); 
            console.log(req.body) ;
          
            const appointment = req.body as AppmntDTO;
            this.createAppointmentUseCase.createAppmnt(appointment)
            
            res.status(200).json({created: true})
        } catch (error) {
            res.status(500).json({error: true})
        }
    }

    public updateAppmnt = (req: Request, res: Response): void => {
      try {
          const idAppmnt = req.params.idAppmnt;
          const appointment = req.body as AppmntDTO;

          this.modifyAppointmentUseCase.modifyAppmt(idAppmnt, appointment);
          
          res.status(200).json({created: true});
      } catch (error) {
          res.status(500).json({error: true})
      }
    }

    public deleteAppmnt = (req: Request, res: Response): void => {
      try {
          const idAppmnt = req.params.idAppmnt;

          this.deleteAppointmentUseCase.deleteAppmnt(idAppmnt);
          
          res.status(200).json({deleted: true});
      } catch (error) {
          res.status(500).json({error: true})
      }
    }

    public getAppmntTypes = (_req: Request, res: Response): void => {
      try {
          this.getAppmntTypesUseCase.getAppmntTypes().then(ApponitmentTypes => {
            res.status(200).json({ApponitmentTypes});
          }).catch(_error => {
            throw Error
          });
          
      } catch (error) {
          res.status(500).json({error: true})
      }
    }

    public checkHealty = (_req: Request, res: Response): void => {
      try {
        res.status(200).json({status: 'active'})
      } catch (error) {
        res.status(500).json({message: 'server error'})
      }
    }
}