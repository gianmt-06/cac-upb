import AppointmentModel from "../model/AppointmentModel";
import ControllerInterface from "../types/ControllerInterface";
import AppointmentView from "../view/AppointmentView";

export default class AppointmentController implements ControllerInterface {

    constructor (
        private readonly view: AppointmentView,
        private readonly model: AppointmentModel
    ){
        console.log(this.model);
    }

    start(){
        this.view.deploy();
    }
}