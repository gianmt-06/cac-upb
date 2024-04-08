import ModalTicketComponent from "../components/ModalTicketComponent";
import WarningModalComponent from "../components/WarningModalComponent";
/**
 * Mediator
 */
export default class ModalManager {
    constructor() {
        this.app = document.getElementById('app');
    }
    notify(modalName) {
        switch (modalName) {
            case 'ticket':
                const ticket = new ModalTicketComponent();
                this.app.innerHTML += ticket.getTemplate();
                break;
            case 'warning':
                const warning = new WarningModalComponent();
                this.app.innerHTML += warning.getTemplate();
                break;
            default:
                console.error('Componente invalido');
                break;
        }
    }
}
