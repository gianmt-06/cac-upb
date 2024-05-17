import NotFoundView from "../view/NotFoundView.js";

export default class NotFoundController {
    constructor(private readonly NotFoundView: NotFoundView){}

    public init = async (): Promise<void> => {
        await this.NotFoundView.render()       
    }
}