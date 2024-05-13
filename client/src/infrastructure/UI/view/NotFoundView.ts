import View from "./View";

export default class NotFoundView extends View {

    public deploy(){
        this.loadView(this.getTemplate());
    }
    
    getTemplate() {
        return `
        <div class="page-content">
            <div class="text-container">
                <h1>
                    404 NOT FOUND
                </h1>
            </div>
        </div>
        `
    }
}