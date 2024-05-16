import { QueryResult } from "pg";
import DatabaseConectionPort from "../../../shared/domain/port/driven/DatabaseConectionPort";
import AppmntDTO from "../../domain/model/AppointmentDTO/AppmntDTO";

export default interface AppmntDatabaseConection extends DatabaseConectionPort<QueryResult<AppmntDTO>, string>{}