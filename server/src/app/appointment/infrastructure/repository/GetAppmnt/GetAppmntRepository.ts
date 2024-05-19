
import AbstractAppointment from '../../../domain/model/appointment/AbstractAppointment';
import NullAppointment from '../../../domain/model/appointment/NullAppointment';
import { AppmntRepositoryPort } from '../../../domain/port/driven/AppmntRepository/AppointmentRepositoryPort';
import GetAppmntRepositoryPort from '../../../domain/port/driven/GetAppmnt/GetAppmntRepositoryPort'
import { compareDates } from '../../../util/CompareDates';
import AppointmentProvider from './provider/AppmntProvider';
import ClientAppmntProvider from './provider/ClientAppmntProvider';
import LocationAppmntProvider from './provider/LocationAppmntProvider';

export default class GetAppmntRepository implements GetAppmntRepositoryPort {
  private readonly locationProvider: LocationAppmntProvider;
  private readonly clientProvider: ClientAppmntProvider;
  private readonly appointmentProvider: AppointmentProvider;

  constructor(private readonly appmntRepository: AppmntRepositoryPort) {
    this.locationProvider = new LocationAppmntProvider();
    this.clientProvider = new ClientAppmntProvider();
    this.appointmentProvider = new AppointmentProvider();
  }

  getAppmnt = async (codeAppmnt: string, docClient: string, date: Date): Promise<AbstractAppointment> => {
    try {
      const appmnt = await this.appmntRepository.getOne(codeAppmnt);

      const providedDate = new Date(date);
      const realDate = new Date(appmnt.date);

      if (compareDates(providedDate, realDate)!) return new NullAppointment()

      const client = await this.clientProvider.getClient(docClient);
      const location = await this.locationProvider.getLocation(appmnt.locationid);

      return this.appointmentProvider.getAppointment(appmnt, client, location);
    } catch (error) {
      return new NullAppointment();
    }
  }

  getAppmntById = async(id: string): Promise<AbstractAppointment> => {
    try {
      console.log(id);
      
      const appmnt = await this.appmntRepository.getOne(id);

      console.log('APPP');
      console.log(appmnt);
      
      

      const client = await this.clientProvider.getClientById(appmnt.clientid);
      const location = await this.locationProvider.getLocation(appmnt.locationid);

      return this.appointmentProvider.getAppointment(appmnt, client, location);
    } catch (error) {
      return new NullAppointment();
    }
  }
}

