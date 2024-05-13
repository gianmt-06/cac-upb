import DBActionsConfig from "../../../../postgresql/config/DatabaseActions";
import LocationDTO from "../../domain/model/locationDTO/LocationDTO";
import LocationDatabaseConection from "../postgresql/LocationDatabaseConection";
import { LocationRepositoryInterface } from "./LocationRepositoryInterface";

export default class LocationRepository implements LocationRepositoryInterface {
    private readonly databaseActions: DBActionsConfig;

    constructor(
        private readonly databaseConectionPort: LocationDatabaseConection 
    ){
        this.databaseActions = new DBActionsConfig();
    }

    getOne = async (key: string): Promise<LocationDTO> => {
        try {
            const { rows } = await this.databaseConectionPort.query(
                this.databaseActions.GET_LOCATION,
                [key]
            )
            
            return rows[0] as LocationDTO;
        } catch (error) {
            console.log(error);
            throw Error
        }
    }

    getAll!: () => LocationDTO[];
    save!: (element: LocationDTO) => Promise<boolean>;
    update!: (key: string, partial: LocationDTO) => boolean | LocationDTO;
    delete!: (key: string) => boolean;
}