import { QueryResult } from "pg";
import DatabaseConectionPort from "../../../shared/domain/port/driven/DatabaseConectionPort";
import LocationDTO from "../../domain/model/locationDTO/LocationDTO";

export default interface LocationDatabaseConection extends DatabaseConectionPort<QueryResult<LocationDTO>, string>{}