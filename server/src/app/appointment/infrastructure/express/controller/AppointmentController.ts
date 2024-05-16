import CreateAppmntUseCasePort from "../../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort";
import { Request, Response } from "express";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO";
import ModifyAppmntUseCasePort from "../../../domain/port/driver/ModifyAppmnt/ModifyAppmntUseCasePort";
import DeleteAppmntUseCasePort from "../../../domain/port/driver/DeleteAppmnt/DeleteAppmntUseCasePort";

export default class AppointmentController {
    constructor(
        private readonly createAppointmentUseCase: CreateAppmntUseCasePort,
        private readonly modifyAppointmentUseCase: ModifyAppmntUseCasePort,
        private readonly deleteAppointmentUseCase: DeleteAppmntUseCasePort
    ){}

    public createAppmnt = (req: Request, res: Response): void => {
        try {
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

    public checkHealty = (_req: Request, res: Response): void => {
      try {
        res.status(200).json({status: 'active'})
      } catch (error) {
        res.status(500).json({message: 'server error'})
      }
    }
}