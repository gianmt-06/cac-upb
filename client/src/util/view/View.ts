export default abstract class View {
    protected view: HTMLElement
    protected parent: HTMLElement
    protected template: string

    constructor(parent: HTMLElement, templete: string) {
        this.view = document.createElement('div')
        this.parent = parent
        this.template = templete
    }

    public load = async (): Promise<void> => {
        const htmlText = this.template
        const parser = new DOMParser()
        const docFragment = parser.parseFromString(htmlText, "text/html")
        this.view = docFragment.body.firstChild as HTMLElement;
        this.parent.appendChild(this.view)
    }

    public get = (): HTMLElement => {
        return this.view
    }   
}