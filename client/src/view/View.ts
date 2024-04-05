export default class View {
    private readonly app: HTMLDivElement = document.getElementById('app') as HTMLDivElement;

    constructor(){}

    public loadView = (html: string) => {
        this.app.innerHTML = html;
    }
}