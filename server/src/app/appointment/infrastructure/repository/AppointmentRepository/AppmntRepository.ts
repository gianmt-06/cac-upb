import DBActionsConfig from "../../../../../postgresql/config/DatabaseActions";
import AppmntDatabaseConection from "../../postgresql/AppmntDatabaseConection";
import { AppmntRepositoryPort } from "../../../domain/port/driven/AppmntRepository/AppointmentRepositoryPort";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO";

export default class AppmntRepository implements AppmntRepositoryPort {
    private readonly databaseActions: DBActionsConfig;
 
    constructor(private readonly databaseConection: AppmntDatabaseConection) {
        this.databaseActions = new DBActionsConfig();
    }

    getOne!: (key: string) => Promise<AppmntDTO>;
    getAll!: () => Promise<AppmntDTO[]>;
    
    save = async (appmnt: AppmntDTO): Promise<boolean> => {
        try {
            await this.databaseConection.query(
                this.databaseActions.CREATE_APPOINTMENT,
                [
                    appmnt.clientid,
                    appmnt.location,
                    appmnt.type,
                    appmnt.code,
                    appmnt.description,
                    appmnt.date
                ]
            )
            return true;
        } catch (error) {
            throw new Error("Error al crear la cita");
        }
    };

    update = async(key: string, partial: AppmntDTO): Promise<boolean> => {
        try {
            await this.databaseConection.query(
                this.databaseActions.UPDATE_APPOINTMENT,
                [
                    key,
                    partial.location,
                    partial.type,
                    partial.description,
                    partial.date
                ]
            )
            return true
        } catch (error) {
            console.log(error);
            
            throw new Error("Error al actualizar la cita")
        }
    }

    delete = async(id: string): Promise<boolean> => {
        try {
            await this.databaseConection.query(this.databaseActions.DELETE_APPOINTMENT, [id])
            return true;
        } catch (error) {
            throw new Error("Error al eliminar la cita")
        }
    }  
}