import ScheduleFormView from "../view/ScheduleFormView.js"

export default class ScheduleFormController {
    constructor(private readonly scheduleFormView: ScheduleFormView){}

    public init = async (): Promise<void> => {
        await this.scheduleFormView.render()       
    }

    handleAction(action: Function){
        this.scheduleFormView.setAction(action);
    }

    clientFields = (action: Function) => {
        this.scheduleFormView.clientFields(action);
    }

    getLocations = (action: Function) => {
        this.scheduleFormView.getLocations(action);
    }

    public getAppmntTypes = (bind: Function) => {
        this.scheduleFormView.getAppmntTypes(bind);
    }

    public createAppmnt = (bind: Function) => {
        this.scheduleFormView.createAppmnt(bind)
    }
}