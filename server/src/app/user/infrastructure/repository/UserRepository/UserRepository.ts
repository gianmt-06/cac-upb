
import UserDTO from "../../../domain/model/userDTO/UserDTO";
import UserDatabaseConection from "../../../domain/port/driven/DatabaseConection/UserDatabaseConection";
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
            throw new Error("Error al obtener usuario de la base de datos")
        }
    }

    save = async(user: UserDTO): Promise<boolean> => {
        try {
            await this.databaseConection.query(
                this.databaseActions.CREATE_USER,
                [
                    user.rolid,
                    user.idlocation,
                    user.doctype,
                    user.docnumber,
                    user.name,
                    user.lastname,
                    user.email,
                    user.password
                ]
            )

            return true;
        } catch (_error) {        
            return false
        }
    }

    update = async (key: string, partial: UserDTO): Promise<boolean> => {
        try{
            await this.databaseConection.query(
                this.databaseActions.UPDATE_USER,
                [
                    key,
                    partial.rolid,
                    partial.idlocation,
                    partial.name,
                    partial.lastname,
                    partial.email,
                    partial.password
                ]
            )
            return true
        } catch (error) {
            throw new Error('Error al actualizar los datos de usuario')
        }
    };

    getUserByEmail = async(email: string): Promise<UserDTO> => {
        try {
            const { rows } = await this.databaseConection.query(
                this.databaseActions.GET_USER_BY_EMAIL, [email]
            )
            return rows[0] as UserDTO;
        } catch (error) {
            throw new Error('Error al obtener usuario')
        }
    }

    getCredentials = async(email: string):  Promise<{uid: string, hashPassword: string}> => {
        try {
            const user = await this.getUserByEmail(email);
            return {uid: user.id, hashPassword: user.password || ''}
        } catch (error) {
            throw new Error('Error al obtener credenciales')
        }
    }

    changeStatus!: (id: string) => Promise<boolean>;
    changePassword!: (id: string, newPassword: string) => Promise<boolean>;
    getRoles!: () => void;
}