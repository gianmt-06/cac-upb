import Repository from "../../../../shared/infrastructure/repository/Repository";
import AbstractUser from "../../model/user/AbstractUser";

export default interface UserRepositoryInterface extends Repository<AbstractUser, string> {}