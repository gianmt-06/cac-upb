import RescheduleFormView from "../view/RescheduleFormView.js"

export default class RescheduleFormController {
    constructor(private readonly rescheduleFormView: RescheduleFormView){}

    public init = async (): Promise<void> => {
        await this.rescheduleFormView.render()       
    }
}