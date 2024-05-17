import NavbarView from "../view/NavbarView.js";

export default class NavbarController {
    constructor(private readonly navbarView: NavbarView){}

    public init = async (): Promise<void> => {
        await this.navbarView.render()       
    }
}