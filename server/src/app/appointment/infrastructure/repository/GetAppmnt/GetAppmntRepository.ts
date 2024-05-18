
import AppmntType from '../../../domain/model/AppointmentType/AppmntType';
import Appointment from '../../../domain/model/appointment/Appointment';
import NullAppointment from '../../../domain/model/appointment/NullAppointment';
import { AppmntRepositoryPort } from '../../../domain/port/driven/AppmntRepository/AppointmentRepositoryPort';
import GetAppmntRepositoryPort from '../../../domain/port/driven/GetAppmnt/GetAppmntRepositoryPort'
import ClientAppmntProvider from './provider/ClientAppmntProvider';
import LocationAppmntProvider from './provider/LocationAppmntProvider';

export default class GetAppmntRepository implements GetAppmntRepositoryPort {
  private readonly locationProvider: LocationAppmntProvider;
  private readonly clientProvider: ClientAppmntProvider;

  constructor(private readonly appmntRepository: AppmntRepositoryPort) {
    this.locationProvider = new LocationAppmntProvider();
    this.clientProvider = new ClientAppmntProvider();
  }

  getAppmnt = async (codeAppmnt: string, docClient: string, date: Date): Promise<Appointment> => {
    try {
      const appmnt = await this.appmntRepository.getOne(codeAppmnt);

      console.log(appmnt);
      
      const providedDate = new Date(date);
      const realDate = new Date(appmnt.date);

      if (this.compareDates(providedDate, realDate)!) return new NullAppointment()

      return new Appointment(
        new AppmntType(
          appmnt.type, appmnt.type
        ),
        appmnt.code || '',
        appmnt.description,
        appmnt.status,
        new Date(appmnt.date),
        await this.clientProvider.getClient(docClient),
        await this.locationProvider.getLocation(appmnt.locationid || '')
      )



    } catch (error) {
      console.log(error);

      throw Error
    }
  }

  compareDates(providedDate: Date, realDate: Date): boolean {
    if (
      providedDate.getFullYear() == realDate.getFullYear() &&
      providedDate.getMonth() == realDate.getMonth() &&
      providedDate.getDate() == realDate.getDate()
    ) {
      return false;
    }
    return true;
  }


}

