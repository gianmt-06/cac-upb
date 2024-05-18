import Repository from "../../../../../shared/infrastructure/repository/Repository";
import AppmntTypeDTO from "../../../domain/model/AppointmentDTO/AppmntTypeDTO";
import AbstractAppmntType from "../../../domain/model/AppointmentType/AbstractAppmntType";
import AppmntType from "../../../domain/model/AppointmentType/AppmntType";
import NullAppmntType from "../../../domain/model/AppointmentType/NullAppmntType";
import GetAppmntTypesRepositoryPort from "../../../domain/port/driven/GetAppmntTypes/GetAppmntTypesRepositoryPort";

export default class GetAppmntTypesRepository implements GetAppmntTypesRepositoryPort{
    constructor(private readonly appmntTypesRepository: Repository<AppmntTypeDTO>){}

    getAppmntTypes = async(): Promise<AbstractAppmntType[]> => {
        try {
            const types = await this.appmntTypesRepository.get(`http://localhost:5000/appointment/types`);
            


            const appmntTypes = types.ApponitmentTypes.map(async (APITypes): Promise<AbstractAppmntType> => {  
                if(!APITypes) return new NullAppmntType()
                return new AppmntType(
                  APITypes.idType,
                  APITypes.description
                )
              }) 
        
              return Promise.all(appmntTypes);
        } catch (error) {
            console.log(error);
            
            throw Error;
        }
    }
}