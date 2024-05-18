import ExpressRouter from "../../../../express/route/ExpressRouter";
import Database from "../../../../postgresql/database/Database";
import LocationRepository from "../repository/LocationRepository/LocationRepository";

import GetLocationsService from "../../application/service/GetLocations/GetLocationsService";
import GetLocationsUseCase from "../../application/usecase/GetLocations/GetLocationsUseCase";
import GetLocationsRepository from "../repository/GetLocations/GetLocationsRepository";

import LocationRouter from "../express/router/LocationRouter";
import LocationController from "../express/controller/LocationController";

export default class LocationFactory {
    
    public static createRouter = () : ExpressRouter => {
        const database = Database.getInstance();
        const locationRepository = new LocationRepository(database);

        const getLocationRepo = new GetLocationsRepository(locationRepository);
        const getLocationService = new GetLocationsService(getLocationRepo);
        const getLocationUseCase = new GetLocationsUseCase(getLocationService)

        const locationController = new LocationController(
            getLocationUseCase
        )

        return new LocationRouter(locationController)
    }
}