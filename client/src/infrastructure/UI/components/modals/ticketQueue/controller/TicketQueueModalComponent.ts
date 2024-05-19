import TicketQueueView from "../view/ModalTicketView.js"

export default class TicketQueueController {
    constructor(private readonly rescheduleFormView: TicketQueueView){}

    public init = async (): Promise<void> => {
        await this.rescheduleFormView.render()       
    }
}