export default class AppointmentController {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        console.log(this.model);
    }
    start() {
        this.view.deploy();
    }
}
