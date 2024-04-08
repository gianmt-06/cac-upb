import ControllerInterface from "../types/ControllerInterface";
import RouteInterface from "../types/RouteInterface";

export default class Router {
    private routeController!: ControllerInterface;

    constructor(
        private readonly routes: RouteInterface[],
    ) {
        window.addEventListener("load", () => {
            this.onChangeHash(new URL(document.location.toString()))
        });
    }

    /**
     * Toma una url y muestra la vista correspondiente
     * @param url URL actual del navegador
     */
    private onChangeHash = (url: URL) => {
        try {
            const pathName = url.pathname.toString().substring(1).split('/')
            let routesList = this.routes;

            let path = '';

            while (pathName.length) {
                path = pathName.shift() || '';
                routesList = routesList.filter((element) => element.path === path)

                if (!pathName.length) break;
                if (routesList[0]?.childrens) routesList = routesList[0].childrens;
            }

            routesList[0] ? this.startController(routesList[0].routeController) : this.loadNotFound();
        } catch (error) {
            console.log(error);
        }
    }

    private loadNotFound = () => {
        try {
            const notFound = this.routes.find(element => element.name === 'notFound');
            notFound ? this.startController(notFound.routeController) : console.warn('Page Not Found');
        } catch (error) {
            console.log(error);
        }
    }

    private startController(controller: ControllerInterface) {
        this.routeController = controller;
        this.routeController.start()
    }
}