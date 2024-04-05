export default class Router {
    constructor(app, routes) {
        this.app = app;
        this.routes = routes;
        /**
         * Toma una url y muestra la vista correspondiente
         * @param url URL actual del navegador
         */
        this.onChangeHash = (url) => {
            var _a;
            const pathName = url.pathname.toString().substring(1).split('/');
            let routesList = this.routes;
            while (pathName.length) {
                routesList = routesList.filter((element) => element.path === pathName.shift());
                if (!pathName.length)
                    break;
                if ((_a = routesList[0]) === null || _a === void 0 ? void 0 : _a.childrens)
                    routesList = routesList[0].childrens;
            }
            if (routesList[0]) {
                this.app.innerHTML = routesList[0].view;
            }
            else {
                //load 404
                console.warn("Page Not Found");
            }
        };
        window.addEventListener("load", () => {
            this.onChangeHash(new URL(document.location.toString()));
        });
    }
}
