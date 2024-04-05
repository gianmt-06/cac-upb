export default class View {
    constructor() {
        this.app = document.getElementById('app');
        this.loadView = (html) => {
            this.app.innerHTML = html;
        };
    }
}
