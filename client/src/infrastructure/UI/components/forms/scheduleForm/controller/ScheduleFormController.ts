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
}