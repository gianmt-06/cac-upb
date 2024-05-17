import ModalTicketView from "../view/ModalTicketView.js"

export default class ModalTicketController {
    constructor(private readonly rescheduleFormView: ModalTicketView){}

    public init = async (): Promise<void> => {
        await this.rescheduleFormView.render()       
    }
}