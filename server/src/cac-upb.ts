import AppointmentFactory from "./appointment/infrastructure/factory/AppmntFactory";
import Express from "./express/Express";

const appointmentFactory = new AppointmentFactory();
const appointmentRouter = appointmentFactory.createRouter();

const server = new Express([
    appointmentRouter
])

server.start();