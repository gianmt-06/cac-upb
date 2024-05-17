import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import ScheduleFormComponent from "../../../components/forms/scheduleForm/ScheduleFromComponent.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import ModalManagerInterface from "../../../types/ModalManagerInterface.js";
import ModalManager from "../../../utils/modalManager/ModalManager.js";

export default class ScheduleView extends View {
    private components: Component[];
    private modalManager: ModalManagerInterface;

    private scheduleForm!: ScheduleFormComponent;
    private navbar!: NavbarComponent;

    constructor(parent: HTMLElement){
        super(parent, '<div></div>')
        this.components = [];
        this.modalManager = new ModalManager();
    }

    public render = async(): Promise<void> => {
        this.load();
        this.loadComponents();
    }

    public loadComponents = (): void => {
        this.navbar = new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement);
        this.scheduleForm = new ScheduleFormComponent(document.querySelector('#app') as HTMLDivElement);

        this.components.push(this.navbar);
        this.components.push(this.scheduleForm);
        this.components.forEach((component: Component) => component.deploy());
        this.modalManager.notify('ticket');
        
        this.scheduleForm.setAction(this.showTicket);
    }

    public showTicket(){
        (document.getElementById('modal-btn') as HTMLButtonElement).click();
    }

    public getClientData = (action: Function) => {
        this.scheduleForm.clientFields(action);
    }
}