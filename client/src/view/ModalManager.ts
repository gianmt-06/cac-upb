import ModalTicketComponent from "../components/ModalTicketComponent";
import WarningModalComponent from "../components/WarningModalComponent";

import ModalManagerInterface from "../types/ModalManagerInterface";

/**
 * Mediator
 */
export default class ModalManager implements ModalManagerInterface {
    private app = document.getElementById('app') as HTMLDivElement;

    notify(modalName: string): void {

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