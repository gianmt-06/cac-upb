import Appointment from "../../../domain/model/appointment/Appointment";
import NullClient from "../../../domain/model/client/NullClient";
import NullLocation from "../../../domain/model/location/NullLocation";
import CreateAppmntUseCasePort from "../../../domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort";
import { Request, Response } from "express";

export default class AppointmentController {
    constructor(
        private readonly createAppointmentUseCase: CreateAppmntUseCasePort 
    ){}

    public createAppmnt = (_req: Request, res: Response): void => {
        try {
            this.createAppointmentUseCase.createAppmnt(
                new Appointment(
                    '',
                    '6151561',
                    'description',
                    'active',
                    new Date(),
                    new NullClient(),
                    new NullLocation()
                )
            )
            res.status(200).json({created: true})
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