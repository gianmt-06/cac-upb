import AbstractAppmntType from "../../../model/AppointmentType/AbstractAppmntType";

export default interface GetAppmntTypesRepositoryPort {
  getAppmntTypes(): Promise<AbstractAppmntType[]>
}
  
