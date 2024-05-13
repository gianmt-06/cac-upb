import { QueryResult } from "pg";
import DatabaseConectionPort from "../../../shared/domain/port/driven/DatabaseConectionPort";
import UserDTO from "../../domain/model/userDTO/UserDTO";

export default interface UserDatabaseConection extends DatabaseConectionPort<QueryResult<UserDTO>, string>{}