import Component from "../../../../../util/component/Component.js";
import ScheduleFormController from "./controller/ScheduleFormController.js";
import ScheduleFormView from "./view/ScheduleFormView.js";

export default class ScheduleFormComponent implements Component {
    private readonly scheduleFormController: ScheduleFormController;

    constructor(parent: HTMLElement){
        this.scheduleFormController = new ScheduleFormController(new ScheduleFormView(parent));;
    }

    public deploy = (): void => {
        this.scheduleFormController.init()
    }

    setAction(action: Function){
        this.scheduleFormController.handleAction(action)
    }

    clientFields = (action: Function) => {
        this.scheduleFormController.clientFields(action);
    }

    getLocations = (action: Function) => {
        this.scheduleFormController.getLocations(action);
    }

    public getAppmntTypes = (bind: Function) => {
        this.scheduleFormController.getAppmntTypes(bind);
    }

    public createAppmnt = (bind: Function) => {
        this.scheduleFormController.createAppmnt(bind)
    }
}