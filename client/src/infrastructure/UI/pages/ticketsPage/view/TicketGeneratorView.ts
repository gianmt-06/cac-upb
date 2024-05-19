import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import RescheduleFormComponent from "../../../components/forms/rescheduleForm/RescheduleFromComponent.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import { getTicketTemplate } from "./template/TicketViewTemplate.js";

export default class TicketsGeneratorView extends View {
    private components: Component[];
    private form!: RescheduleFormComponent;
    private navbar!: NavbarComponent;


    constructor(parent: HTMLElement){
        super(parent, getTicketTemplate())
        this.components = [];
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
    }

    formAction(action: Function){
        this.form.setFormAction(action);
    }
}