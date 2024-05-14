import AppointmentFactory from "./app/appointment/infrastructure/factory/AppmntFactory";
import ClientFactory from "./app/client/infrastructure/factory/ClientFactory";
import UserFactory from "./app/user/infrastructure/factory/UserFactory";
import Express from "./express/Express";

const appointmentRouter = AppointmentFactory.createRouter();
const userRouter = UserFactory.createRouter(); 
const clientRouter = ClientFactory.createRouter();

const server = new Express([
    appointmentRouter,
    userRouter,
    clientRouter
]);

server.start();