export default abstract class View {
    private readonly app: HTMLDivElement = document.getElementById('app') as HTMLDivElement;
        
    protected loadView = (html: string) => {
        this.app.innerHTML = html;
    }

    abstract deploy(): void;
}