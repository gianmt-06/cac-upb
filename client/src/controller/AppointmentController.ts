import AppointmentModel from "../model/AppointmentModel";
import AppointmentView from "../view/AppointmentView";

export default class AppointmentController {

    constructor (
        private readonly view: AppointmentView,
        private readonly model: AppointmentModel
    ) {
        console.log(this.model);
    }

    start(){
        this.view.deploy();
    }
}