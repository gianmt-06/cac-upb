import { QueryResult } from "pg";
import DatabaseConectionPort from "../../../../../shared/domain/port/driven/DatabaseConectionPort";
import AppmntTypeDTO from "../../../model/AppointmentDTO/AppmntTypeDTO";

export default interface AppmntTypeDatabaseConection extends DatabaseConectionPort<QueryResult<AppmntTypeDTO>, string>{}