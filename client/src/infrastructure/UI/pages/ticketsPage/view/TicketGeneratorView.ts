import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import RescheduleFormComponent from "../../../components/forms/rescheduleForm/RescheduleFromComponent.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import ModalManagerInterface from "../../../types/ModalManagerInterface.js";
import ModalManager from "../../../utils/modalManager/ModalManager.js";
import { getTicketTemplate } from "./template/TicketViewTemplate.js";

export default class TicketsGeneratorView extends View {
    private components: Component[];
    private form!: RescheduleFormComponent;
    private navbar!: NavbarComponent;
    private modalManager: ModalManagerInterface;


    constructor(parent: HTMLElement){
        super(parent, getTicketTemplate())
        this.components = [];
        this.modalManager = new ModalManager();
    }

    public render = async(): Promise<void> => {
        this.load()
        this.loadComponents();
    }


    public loadComponents = () => {
        this.navbar = new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement);
        this.form = new RescheduleFormComponent(document.querySelector('#formTicketContainer') as HTMLDivElement);

        this.components.push(this.navbar);
        this.components.push(this.form);

        this.components.forEach((component: Component) => component.deploy());
        this.modalManager.notify('ticket-queue');
        this.form.setFormAction(this.showTicket)
    }

    public showTicket(){
        (document.getElementById('modal-btn') as HTMLButtonElement).click();
    }

    formAction(action: Function){
        this.form.setFormAction(action);
    }
}