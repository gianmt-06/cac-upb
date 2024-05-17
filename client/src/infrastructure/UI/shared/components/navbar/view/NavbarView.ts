import View from "../../../../../../util/view/View.js";
import { getNavbar } from "./template/NavbarTemplate.js";

export default class NavbarView extends View {
    constructor(parent: HTMLElement){
        super(parent, getNavbar())
    }
    
    public render = async (): Promise<void> => {
        await this.load()    
    }
}