import DBActionsConfig from "../../../../../postgresql/config/DatabaseActions";
import LocationDTO from "../../../domain/model/locationDTO/LocationDTO";
import LocationDatabaseConection from "../../postgresql/LocationDatabaseConection";
import { LocationRepositoryPort } from "../../../domain/port/driven/LocationRepository/LocationRepositoryPort";

export default class LocationRepository implements LocationRepositoryPort {
    private readonly databaseActions: DBActionsConfig;

    constructor(private readonly databaseConectionPort: LocationDatabaseConection ){
        this.databaseActions = new DBActionsConfig();
    }

    getOne = async (key: string): Promise<LocationDTO> => {
        try {
            const { rows } = await this.databaseConectionPort.query(this.databaseActions.GET_LOCATION, [key]);
            return rows[0] as LocationDTO;
        } catch (error) {
            throw Error;
        }
    }

    getAll = async (): Promise<LocationDTO[]> => {
        try {
           const { rows } = await this.databaseConectionPort.query(this.databaseActions.GET_LOCATIONS) ;
          
           
           return rows as LocationDTO[];
        } catch (error) {
            throw Error
        }
    }

    save!: (element: LocationDTO) => Promise<boolean>;
    update!: (key: string, partial: LocationDTO) => Promise<boolean>;
    delete!: (key: string) => Promise<boolean>;
}