import Component from "../../../../../util/component/Component.js";
import RescheduleFormController from "./controller/RescheduleFormController.js";
import RescheduleFormView from "./view/RescheduleFormView.js";

export default class RescheduleFormComponent implements Component {
    private readonly RescheduleFormController: RescheduleFormController;

    constructor(parent: HTMLElement){
        this.RescheduleFormController = new RescheduleFormController(new RescheduleFormView(parent));;
    }

    public deploy = (): void => {
        this.RescheduleFormController.init()
    }
}