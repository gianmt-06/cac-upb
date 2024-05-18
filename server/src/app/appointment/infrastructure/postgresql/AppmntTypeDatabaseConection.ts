import { QueryResult } from "pg";
import DatabaseConectionPort from "../../../shared/domain/port/driven/DatabaseConectionPort";
import AppmntTypeDTO from "../../domain/model/AppointmentDTO/AppmntTypeDTO";

export default interface AppmntTypeDatabaseConection extends DatabaseConectionPort<QueryResult<AppmntTypeDTO>, string>{}