import { QueryResult } from "pg";
import DatabaseConectionPort from "../../../../../shared/domain/port/driven/DatabaseConectionPort";
import ClientDTO from "../../../model/ClientDTO/ClientDTO";

export default interface ClientDatabaseConection extends DatabaseConectionPort<QueryResult<ClientDTO>, string>{}