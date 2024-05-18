
import AbstractAppmntType from '../../../domain/model/AppointmentType/AbstractAppmntType';
import AppmntType from '../../../domain/model/AppointmentType/AppmntType';
import NullAppmntType from '../../../domain/model/AppointmentType/NullAppmntType';
import { AppmntTypeRepositoryPort } from '../../../domain/port/driven/AppmntRepository/AppointmentTypePort';
import GetAppmntTypesRepositoryPort from '../../../domain/port/driven/GetAppmntTypes/GetAppmntTypesRepositoryPort'

export default class GetAppmntTypesRepository implements GetAppmntTypesRepositoryPort {
  constructor(private readonly appmntTypesRepository: AppmntTypeRepositoryPort) {}

  getAppmntTypes = async(): Promise<AbstractAppmntType[]> => {
    try {
      const databaseTypes = await this.appmntTypesRepository.getAll();

      const appmntTypes = databaseTypes.map(async (databaseType): Promise<AbstractAppmntType> => {  
        if(!databaseType) return new NullAppmntType()
        return new AppmntType(
          databaseType.idappmttype,
          databaseType.description
        )
      }) 

      return Promise.all(appmntTypes);
    } catch (error) {
      console.log(error);
      throw new Error
    }
  }

}
  
