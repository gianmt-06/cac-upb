import Component from "../../../../../../util/component/Component.js";
import View from "../../../../../../util/view/View.js";
import NavbarComponent from "../../../components/navbar/NavbarComponent.js";
import { getNotFound } from "./template/NotFoundTemplate.js";

export default class NotFoundView extends View {
    private components: Component[];

    constructor(parent: HTMLElement){
        super(parent, getNotFound());
        this.components = [];
    }
    
    public render = async (): Promise<void> => {
        await this.load()    
        this.components.push(new NavbarComponent(document.querySelector('#navbar') as HTMLDivElement))
        this.components.forEach((component: Component) => component.deploy())
    }
}