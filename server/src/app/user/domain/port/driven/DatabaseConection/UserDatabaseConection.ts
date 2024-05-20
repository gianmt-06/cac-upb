import { QueryResult } from "pg";
import DatabaseConectionPort from "../../../../../shared/domain/port/driven/DatabaseConectionPort";
import UserDTO from "../../../model/userDTO/UserDTO";

export default interface UserDatabaseConection extends DatabaseConectionPort<QueryResult<UserDTO>, string>{}