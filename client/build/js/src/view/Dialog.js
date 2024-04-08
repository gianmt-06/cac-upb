import ModalTicketComponent from "../components/ModalTicketComponent";
import WarningModalComponent from "../components/WarningModalComponent";
export default class Dialog {
    constructor() {
        this.app = document.getElementById('app');
    }
    notify(dialogName) {
        switch (dialogName) {
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
