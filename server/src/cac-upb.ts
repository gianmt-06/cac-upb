import AppointmentFactory from "./app/appointment/infrastructure/factory/AppmntFactory";
import ClientFactory from "./app/client/infrastructure/factory/ClientFactory";
import LocationFactory from "./app/location/infrastructure/factory/LocationFactory";
import TicketFactory from "./app/ticket/infrastructure/factory/TicketFactory";
import UserFactory from "./app/user/infrastructure/factory/UserFactory";
import Express from "./express/Express";

const appointmentRouter = AppointmentFactory.createRouter();
const userRouter = UserFactory.createRouter(); 
const clientRouter = ClientFactory.createRouter();
const locationRouter = LocationFactory.createRouter();
const ticketRouter = TicketFactory.createRouter()

const server = new Express([
    appointmentRouter,
    userRouter,
    clientRouter,
    locationRouter,
    ticketRouter
]);

server.start();