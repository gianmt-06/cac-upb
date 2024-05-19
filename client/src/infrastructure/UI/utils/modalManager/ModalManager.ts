import ModalManagerInterface from "../../types/ModalManagerInterface";
import ModalTicketComponent from "../../components/modals/ticket/ModalTicketComponent";
import TicketQueueComponent from "../../components/modals/ticketQueue/TicketQueueModalComponent";
// import WarningModalComponent from "../components/WarningModalComponent";

/**
 * Mediator
 */
export default class ModalManager implements ModalManagerInterface {
    private layout = document.getElementById('app') as HTMLDivElement;

    notify(modalName: string): void {
        
        switch (modalName) {
            case 'ticket':
                const ticket = new ModalTicketComponent(this.layout);
                ticket.deploy();
                break;
            
            case 'ticket-queue':
                const ticketQueue = new TicketQueueComponent(this.layout);
                ticketQueue.deploy();
                break;
            
            // case 'warning':
            //     const warning = new WarningModalComponent();
            //     this.app.innerHTML += warning.getTemplate();
            //     break;

            default:
                console.error('Componente invalido');
                break;
        }
    }
}