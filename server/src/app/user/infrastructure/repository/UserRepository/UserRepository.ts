
import UserDTO from "../../../domain/model/userDTO/UserDTO";
import UserDatabaseConection from "../../postgresql/UserDatabaseConection";
import { UserRepositoryPort } from "../../../domain/port/driven/UserRepository/UserRepositoryPort";

import DBActionsConfig from "../../../../../postgresql/config/DatabaseActions";

export default class UserRepository implements UserRepositoryPort {
    private readonly databaseActions: DBActionsConfig;
    delete!: (key: string) => Promise<boolean>;
    getAll!: () => Promise<UserDTO[]>;

    constructor(private readonly databaseConection: UserDatabaseConection) {
        this.databaseActions = new DBActionsConfig();
    }

    getOne = async (key: string): Promise<UserDTO> => {
        try {
            const { rows } = await this.databaseConection.query(
                this.databaseActions.GET_USER, [key]
            )
            return rows[0] as UserDTO;
        } catch (error) {
            throw Error
        }
    }

    save = (user: UserDTO): Promise<boolean> => {
        try {
            this.databaseConection.query(
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

    update = async (key: string, partial: UserDTO): Promise<boolean> => {
        try{
            await this.databaseConection.query(
                this.databaseActions.UPDATE_USER,
                [
                    key,
                    partial.rolId,
                    partial.idlocation,
                    partial.name,
                    partial.lastname,
                    partial.email,
                    partial.password
                ]
            )
            return true
        } catch (error) {
            throw Error
        }
    };

    getCredentials!: (email: string) => Promise<string>;
    changeStatus!: (id: string) => Promise<boolean>;
    changePassword!: (id: string, newPassword: string) => Promise<boolean>;
    getRoles!: () => void;
}