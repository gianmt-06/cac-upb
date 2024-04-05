import RouteInterface from "../types/routeInterface";

export default class Router {
    constructor(
        private readonly app: HTMLElement,
        private readonly routes: RouteInterface[]    
    ){
        window.addEventListener("load", () => {
            this.onChangeHash(new URL(document.location.toString()))
        });        
    }

    /**
     * Toma una url y muestra la vista correspondiente
     * @param url URL actual del navegador
     */
    onChangeHash = (url: URL) => {
        const pathName = url.pathname.toString().substring(1).split('/')
        let routesList = this.routes;

        while(pathName.length) {
            routesList = routesList.filter((element) => element.path === pathName.shift())

            if(!pathName.length) break;
            if(routesList[0]?.childrens) routesList = routesList[0].childrens;
        }

        if(routesList[0]) {
            this.app.innerHTML = routesList[0].view
        } else {
            //load 404
            console.warn("Page Not Found");
        }
    }
}