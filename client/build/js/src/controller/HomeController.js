export default class HomeController {
    constructor(view) {
        this.view = view;
    }
    start() {
        this.view.deploy();
    }
}
