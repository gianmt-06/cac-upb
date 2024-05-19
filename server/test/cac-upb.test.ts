import AppointmentFactory from "../src/app/appointment/infrastructure/factory/AppmntFactory";
import ClientFactory from "../src/app/client/infrastructure/factory/ClientFactory";
import LocationFactory from "../src/app/location/infrastructure/factory/LocationFactory";
import TicketFactory from "../src/app/ticket/infrastructure/factory/TicketFactory";
import UserFactory from "../src/app/user/infrastructure/factory/UserFactory";
import Express from "../src/express/Express";

import supertest from 'supertest';

describe("cac-upb", () => {
    let cacApp: Express;

    beforeAll(() => {
        const appointmentRouter = AppointmentFactory.createRouter();
        const userRouter = UserFactory.createRouter(); 
        const clientRouter = ClientFactory.createRouter();
        const locationRouter = LocationFactory.createRouter();
        const ticketRouter = TicketFactory.createRouter()

        cacApp = new Express([
            appointmentRouter,
            userRouter,
            clientRouter,
            locationRouter,
            ticketRouter
        ]);
    })

    describe('GET /client/document/:document', () => {
        it('should return 200 OK with movies0', async () => {
            const response = await supertest(cacApp.getApp())
                .get('/client/document/1099735628');
                
            expect(response.statusCode).toBe(200);
            // expect(response.body).toHaveProperty('movies');
        })
    })
})