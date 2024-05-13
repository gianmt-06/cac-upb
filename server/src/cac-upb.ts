import AppointmentFactory from "./app/appointment/infrastructure/factory/AppmntFactory";
import UserFactory from "./app/user/infrastructure/factory/UserFactory";
import Express from "./express/Express";

const appointmentFactory = new AppointmentFactory();
const appointmentRouter = appointmentFactory.createRouter();

const userRouter = UserFactory.createRouter(); 

const server = new Express([
    appointmentRouter,
    userRouter
]);

server.start();