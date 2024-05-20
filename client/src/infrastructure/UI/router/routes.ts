import AppmntUseCasesFactory from "../../../app/appointment/infrastructure/factory/AppmntUseCasesFactory";
import GetClientUseCaseFactory from "../../../app/client/infrastructure/factory/GetClientUseCaseFactory/GetClientUseCaseFactory";
import GetLocationsUseCaseFactory from "../../../app/location/infrastructure/factory/GetLocationsUseCaseFactory";
import TicketsUseCasesFactory from "../../../app/ticket/infrastructure/factory/TicketsUseCasesFactory";
import AdminController from "../pages/adminPage/controller/AdminController";
import AdminView from "../pages/adminPage/view/AdminView";
import CancelController from "../pages/cancelAppmnt/controller/CancelController";
import CancelView from "../pages/cancelAppmnt/view/CancelView";
import HomeController from "../pages/home/controller/HomeController";
import HomeView from "../pages/home/view/HomeView";
import LoginController from "../pages/loginPage/controller/LoginController";
import LoginView from "../pages/loginPage/view/LoginView";

import RescheduleController from "../pages/rescheduleAppointment/controller/RescheduleController";
import RescheduleView from "../pages/rescheduleAppointment/view/RescheduleView";

import ScheduleController from "../pages/scheduleAppointment/controller/ScheduleController";
import ScheduleView from "../pages/scheduleAppointment/view/ScheduleView";
import TicketsGeneratorController from "../pages/ticketsPage/controller/TicketGeneratorController";
import TicketsGeneratorView from "../pages/ticketsPage/view/TicketGeneratorView";
import UserController from "../pages/userPage/controller/UserController";
import UserView from "../pages/userPage/view/UserView";
// import TicketsGeneratorController from "../pages/ticketsPage/controller/TicketGeneratorController";
// import TicketsGeneratorView from "../pages/ticketsPage/view/TicketGeneratorView";

import NotFoundController from "../shared/pages/notFound/controller/NotFoundController";
import NotFoundView from "../shared/pages/notFound/view/NotFoundView";

import RouteInterfaceN from "../types/RouteInterface";

const layout = document.getElementById('app') as HTMLElement

export const routes: RouteInterfaceN[] = [
    {
        name: 'home',
        path: 'home',
        routeController: new HomeController(new HomeView(layout))
    },
    {
        name: 'citas',
        path: 'citas',
        routeController: new ScheduleController(
            new ScheduleView(layout), 
            GetClientUseCaseFactory.createUseCase(),
            GetLocationsUseCaseFactory.createUseCase(),
            AppmntUseCasesFactory.GetAppmntTypesUseCase(),
            AppmntUseCasesFactory.CreateAppmntUseCase()
        ),
        
        childrens: [
            {
                name: 'reagendar',
                path: 'modify',
                routeController: new RescheduleController(
                        new RescheduleView(layout),
                        AppmntUseCasesFactory.ValidateAppmntUseCase(),
                        GetLocationsUseCaseFactory.createUseCase(),
                        AppmntUseCasesFactory.GetAppmntTypesUseCase()
                    ),
                // childrens: [
                //     {
                //         path: ':id',
                //         routeController: new AppointmentController(new AppointmentView(), new AppointmentModel()),
                //     }
                // ]
            },
            {
                name: 'cancelar',
                path: 'cancel',
                routeController: new CancelController(
                    new CancelView(layout), 
                    AppmntUseCasesFactory.ValidateAppmntUseCase(),
                    AppmntUseCasesFactory.DeleteAppmntUseCase()
                    )
            },
        ]
    },
    {
        name: 'tickets',
        path: 'tickets',
        routeController: new TicketsGeneratorController(
            new TicketsGeneratorView(layout),
            TicketsUseCasesFactory.CreateTicketUseCase()
            ),
    },
    {
        name: 'admin',
        path: 'admin',
        routeController: new AdminController(new AdminView(layout)),
    },
    {
        name: 'user',
        path: 'user',
        routeController: new UserController(
            new UserView(layout),
            TicketsUseCasesFactory.GetTicketUseCase()
            ),
    },
    {
        name: 'login',
        path: 'login',
        routeController: new LoginController(new LoginView(layout)),
    },
    {
        name: 'notFound',
        path: 'notFound',
        routeController: new NotFoundController(new NotFoundView(layout))
    }
]