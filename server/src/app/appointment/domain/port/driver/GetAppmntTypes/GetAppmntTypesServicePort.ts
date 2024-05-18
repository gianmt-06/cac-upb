import AbstractAppmntType from "../../../model/AppointmentType/AbstractAppmntType";

export default interface GetAppmntTypesServicePort {
  getAppmntTypes(): Promise<AbstractAppmntType[]>
}
  
