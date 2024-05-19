import DBActionsConfig from "../../../../../postgresql/config/DatabaseActions";
import AppmntDatabaseConection from "../../postgresql/AppmntDatabaseConection";
import AppmntDTO from "../../../domain/model/AppointmentDTO/AppmntDTO";
import { AppmntRepositoryPort } from "../../../domain/port/driven/AppmntRepository/AppointmentRepositoryPort";

export default class AppmntRepository implements AppmntRepositoryPort {
    private readonly databaseActions: DBActionsConfig;
 
    constructor(private readonly databaseConection: AppmntDatabaseConection) {
        this.databaseActions = new DBActionsConfig();
    }

    getByCode!: (codeAppmnt: string) => Promise<AppmntDTO>;
  
    getAll!: () => Promise<AppmntDTO[]>;

    getOne = async (code: string):Promise<AppmntDTO> => {
        try {
            const {rows} = await this.databaseConection.query(
                this.databaseActions.GET_APPOINTMENT_BY_CODE,
                [code]
            )
            return rows[0] as AppmntDTO;
        } catch (error) {
            throw Error
        }
    }
    
    save = async (appmnt: AppmntDTO): Promise<boolean> => {
        try {
            console.log(appmnt);
            
            await this.databaseConection.query(
                this.databaseActions.CREATE_APPOINTMENT,
                [
                    appmnt.clientid, //Obtener en el camino
                    appmnt.locationid,
                    appmnt.idtype,
                    appmnt.code, //Obtener en el camino
                    appmnt.description,
                    appmnt.date,
                    appmnt.time
                ]
            )
            return true;
        } catch (error) {
            console.log(error);
            
            throw new Error("Error al crear la cita");
        }
    };

    update = async(code: string, partialAppmnt: AppmntDTO): Promise<boolean> => {
        try {
            await this.databaseConection.query(
                this.databaseActions.UPDATE_APPOINTMENT,
                [
                    code,
                    partialAppmnt.locationid,
                    partialAppmnt.idtype,
                    partialAppmnt.description,
                    partialAppmnt.date,
                    partialAppmnt.time
                ]
            )
            return true
        } catch (error) {
            console.log(error);
            
            throw new Error("Error al actualizar la cita")
        }
    }

    delete = async(code: string): Promise<boolean> => {
        try {
            await this.databaseConection.query(this.databaseActions.DELETE_APPOINTMENT, [code])
            return true;
        } catch (error) {
            throw new Error("Error al eliminar la cita")
        }
    }
}