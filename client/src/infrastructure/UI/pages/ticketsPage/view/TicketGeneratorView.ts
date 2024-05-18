import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import RescheduleFormComponent from "../../../components/forms/rescheduleForm/RescheduleFromComponent.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import { getTicketTemplate } from "./template/TicketViewTemplate.js";

export default class TicketsGeneratorView extends View {
    private components: Component[];

    constructor(parent: HTMLElement){
        super(parent, getTicketTemplate())
        this.components = [];
    }

    public render = async(): Promise<void> => {
        await this.load()
        this.components.push(new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement));
        this.components.push(new RescheduleFormComponent(document.querySelector('#formTicketContainer') as HTMLDivElement));

        this.components.forEach((component: Component) => component.deploy());
    }
}