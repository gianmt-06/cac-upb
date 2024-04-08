export default class NotFoundController {
    constructor(view) {
        this.view = view;
    }
    start() {
        this.view.deploy();
    }
}
