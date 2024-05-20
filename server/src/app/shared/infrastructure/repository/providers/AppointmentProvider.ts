import Database from "../../../../../postgresql/database/Database";
import AbstractAppointment from "../../../../appointment/domain/model/appointment/AbstractAppointment";
import NullAppointment from "../../../../appointment/domain/model/appointment/NullAppointment";
import GetAppmntRepositoryPort from "../../../../appointment/domain/port/driven/GetAppmnt/GetAppmntRepositoryPort";
import AppmntRepository from "../../../../appointment/infrastructure/repository/AppointmentRepository/AppmntRepository";
import GetAppmntRepository from "../../../../appointment/infrastructure/repository/GetAppmnt/GetAppmntRepository";

export default class AppointmentProvider {
    private getAppmntRepository: GetAppmntRepositoryPort;

    constructor(){
        this.getAppmntRepository = new GetAppmntRepository(new AppmntRepository(Database.getInstance()))
    }

    public getAppointment = async(id: string): Promise<AbstractAppointment> => {
        try {
            return this.getAppmntRepository.getAppmntById(id);
        } catch (error) {
            return new NullAppointment();
        }
    }
}