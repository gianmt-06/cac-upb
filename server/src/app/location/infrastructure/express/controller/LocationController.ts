import { Request, Response } from "express"
import GetLocationsUseCasePort from "../../../domain/port/driver/GetLocations/GetLocationsUseCasePort";

export default class LocationController {
    constructor(
        private readonly getLocationsUseCase: GetLocationsUseCasePort,
    ){}

    public getLocations = (_req: Request, res: Response): void => {
        try {            
            this.getLocationsUseCase.getLocations().then(locations => {
                res.status(200).json({locations})
            }).catch(_error => {
                throw Error  
            })
        } catch (error) {
            res.status(500).json({error: true})
        }
    }
}