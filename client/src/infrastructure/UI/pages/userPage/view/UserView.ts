import Ticket from "../../../../../app/ticket/domain/model/Ticket/Ticket.js";
import Component from "../../../../../util/component/Component.js";
import View from "../../../../../util/view/View.js";
import NavbarComponent from "../../../shared/components/navbar/NavbarComponent.js";
import { getTemplate } from "./template/UserViewTemplate.js";

export default class UserView extends View {
    private components: Component[];

    constructor(parent: HTMLElement){
        super(parent, getTemplate())
        this.components = [];
    }

    public render = async(): Promise<void> => {
        await this.load()
        this.components.push(new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement))
        this.components.forEach((component: Component) => component.deploy())
    }

    public getTicketHandler = (action: Function) => {
        document.getElementById('getTicket')?.addEventListener('click', () =>{
            action().then((value: Ticket) => {
                console.log(value.getCode());
                this.showTicket(value as Ticket);
            })
        })
    }

    public showTicket(ticket: Ticket){
        const nameSpan = document.getElementById("name-client") as HTMLSpanElement;
        const documentSpan = document.getElementById("doc-client") as HTMLSpanElement;
        const clientTypeSpan = document.getElementById("type-client") as HTMLSpanElement;
        const appmntType = document.getElementById("type-appmnt") as HTMLSpanElement;
        const dateSpan = document.getElementById("date-appmnt") as HTMLSpanElement;
        const timeAppmnt = document.getElementById("time-appmnt") as HTMLSpanElement;
        const locationAppmnt = document.getElementById("location-appmnt") as HTMLSpanElement;
        const description = document.getElementById("descrition-appmnt") as HTMLParagraphElement;

        const appmnt = ticket.getAppointment();
        const client = appmnt.getClient();

        nameSpan.textContent =  client.getName() + ' ' + client.getLastname();
        documentSpan.textContent = client.getDocType() + ' ' + client.getDocNumber();
        clientTypeSpan.textContent = client.getType().description;
        appmntType.textContent = appmnt.getType().getDescription();
        dateSpan.textContent = appmnt.getDate().toDateString();
        timeAppmnt.textContent = appmnt.getDate().toDateString();
        locationAppmnt.textContent = appmnt.getLocation().getName();
        description.textContent = appmnt.getDescription();
    }
}