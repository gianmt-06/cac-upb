import AbstractAppmntType from "../../../model/AppointmentType/AbstractAppmntType";

export default interface GetAppmntTypesUseCasePort {
  getAppmntTypes(): Promise<AbstractAppmntType[]>
}
  
