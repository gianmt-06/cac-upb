import Database from "../../../../../postgresql/database/Database";
import AbstractLocation from "../../../../location/domain/model/location/AbstractLocation";
import NullLocation from "../../../../location/domain/model/location/NullLocation";
import GetLocationRepositoryPort from "../../../../location/domain/port/driven/GetLocation/GetLocationRepositoryPort";
import GetLocationRepository from "../../../../location/infrastructure/repository/GetLocation/GetLocationRepository";
import LocationRepository from "../../../../location/infrastructure/repository/LocationRepository/LocationRepository";

export default class LocationProvider {
    public getLocationRepository: GetLocationRepositoryPort;

    constructor(){
        this.getLocationRepository = new GetLocationRepository(new LocationRepository(Database.getInstance()))
    }

    public getLocation = async(idLocation: string): Promise<AbstractLocation> => {
        try {
            return this.getLocationRepository.getLocation(idLocation);
        } catch (error) {
            return new NullLocation();
        }
    }
}