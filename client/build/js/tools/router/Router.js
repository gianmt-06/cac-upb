export default class Router {
    constructor(routes) {
        this.routes = routes;
        /**
         * Toma una url y muestra la vista correspondiente
         * @param url URL actual del navegador
         */
        this.onChangeHash = (url) => {
            var _a;
            try {
                const pathName = url.pathname.toString().substring(1).split('/');
                let routesList = this.routes;
                let path = '';
                while (pathName.length) {
                    path = pathName.shift() || '';
                    routesList = routesList.filter((element) => element.path === path);
                    if (!pathName.length)
                        break;
                    if ((_a = routesList[0]) === null || _a === void 0 ? void 0 : _a.childrens)
                        routesList = routesList[0].childrens;
                }
                routesList[0] ? this.startController(routesList[0].routeController) : this.loadNotFound();
            }
            catch (error) {
                console.log(error);
            }
        };
        this.loadNotFound = () => {
            try {
                const notFound = this.routes.find(element => element.name === 'notFound');
                notFound ? this.startController(notFound.routeController) : console.warn('Page Not Found');
            }
            catch (error) {
                console.log(error);
            }
        };
        window.addEventListener("load", () => {
            this.onChangeHash(new URL(document.location.toString()));
        });
    }
    startController(controller) {
        this.routeController = controller;
        this.routeController.start();
    }
}
