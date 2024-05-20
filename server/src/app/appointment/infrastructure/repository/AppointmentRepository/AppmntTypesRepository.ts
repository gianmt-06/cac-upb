import AppmntTypeDTO from "../../../domain/model/AppointmentDTO/AppmntTypeDTO";
import { AppmntTypeRepositoryPort } from "../../../domain/port/driven/AppmntRepository/AppointmentTypePort";
import AppmntTypeDatabaseConection from "../../../domain/port/driven/DatabaseConection/AppmntTypeDatabaseConection";

export default class AppointmentTypeRepository implements AppmntTypeRepositoryPort {
    constructor(private readonly databaseConection: AppmntTypeDatabaseConection){}

    getOne!: (key: string) => Promise<AppmntTypeDTO>;
    save!: (element: AppmntTypeDTO) => Promise<boolean>;
    update!: (key: string, partial: AppmntTypeDTO) => Promise<boolean>;
    delete!: (key: string) => Promise<boolean>;
    
    getAll = async():Promise<AppmntTypeDTO[]> => {
        try {
            const { rows } = await this.databaseConection.query('SELECT * FROM v_appmnt_types')
            return rows as AppmntTypeDTO[];
        } catch (error) {
            throw new Error("Error al obtener tipos")
        }
    }
}