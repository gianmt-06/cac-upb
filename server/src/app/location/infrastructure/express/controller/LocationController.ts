import { Request, Response } from "express"
import GetLocationsUseCasePort from "../../../domain/port/driver/GetLocations/GetLocationsUseCasePort";
import Controller from "../../../../../express/controller/Controller";

export default class LocationController extends Controller{
    constructor(
        private readonly getLocationsUseCase: GetLocationsUseCasePort,
    ){
        super()
    }

    public getLocations = (_req: Request, res: Response): void => {
        try {            
            this.getLocationsUseCase.getLocations().then(locations => {
                res.status(200).json(this.responseHandler.response("Ubicaciones obtenidas con exito", locations))
            }).catch(_error => {
                res.status(500).json(this.responseHandler.serverError())

            })
        } catch (error) {
            res.status(500).json(this.responseHandler.serverError())
        }
    }
}