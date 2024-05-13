
import UserDTO from "../../domain/model/userDTO/UserDTO";
import UserDatabaseConection from "../postgresql/UserDatabaseConection";
import { UserRepositoryInterface } from "./UserRepositoryInterface";

import DBActionsConfig from "../../../../postgresql/config/DatabaseActions";

export default class UserRepository implements UserRepositoryInterface {
    private readonly databaseActions: DBActionsConfig;

    constructor(
        private readonly DatabaseConectionPort: UserDatabaseConection
    ) {
        this.databaseActions = new DBActionsConfig();
    }

    getOne = async (key: string): Promise<UserDTO> => {
        try {
            const { rows } = await this.DatabaseConectionPort.query(
                this.databaseActions.GET_USER, [key]
            )
            return rows[0] as UserDTO;
        } catch (error) {
            throw Error
        }
    }

    getAll!: () => UserDTO[];

    save = (user: UserDTO): Promise<boolean> => {
        try {
            this.DatabaseConectionPort.query(
                this.databaseActions.CREATE_USER,
                [
                    user.rolId,
                    user.idlocation,
                    user.name,
                    user.lastname,
                    user.email,
                    user.password
                ]
            )
            return Promise.resolve(true);
        } catch (_error) {
            return Promise.resolve(false)
        }
    }

    update!: (key: string, partial: UserDTO) => boolean | UserDTO;
    delete!: (key: string) => boolean;

}