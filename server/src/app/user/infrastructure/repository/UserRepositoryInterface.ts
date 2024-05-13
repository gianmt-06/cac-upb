import Repository from "../../../shared/infrastructure/repository/Repository";
import UserDTO from "../../domain/model/userDTO/UserDTO";

export interface UserRepositoryInterface extends Repository<UserDTO, string> {}