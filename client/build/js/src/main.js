import Router from "../tools/router/Router.js";
import { routes } from "./router/routes.js";
import AppointmentController from "./controller/AppointmentController.js";
import AppointmentModel from "./model/AppointmentModel.js";
import AppointmentView from "./view/AppointmentView.js";
const app = document.getElementById('app');
const controller = new AppointmentController(new AppointmentView(), new AppointmentModel());
controller.start();
new Router(app, routes);
