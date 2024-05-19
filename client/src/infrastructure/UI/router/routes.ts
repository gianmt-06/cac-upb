import AppmntUseCasesFactory from "../../../app/appointment/infrastructure/factory/AppmntUseCasesFactory";
import GetClientUseCaseFactory from "../../../app/client/infrastructure/factory/GetClientUseCaseFactory/GetClientUseCaseFactory";
import GetLocationsUseCaseFactory from "../../../app/location/infrastructure/factory/GetLocationsUseCaseFactory";
import CancelController from "../pages/cancelAppmnt/controller/CancelController";
import CancelView from "../pages/cancelAppmnt/view/CancelView";
import HomeController from "../pages/home/controller/HomeController";
import HomeView from "../pages/home/view/HomeView";

import RescheduleController from "../pages/rescheduleAppointment/controller/RescheduleController";
import RescheduleView from "../pages/rescheduleAppointment/view/RescheduleView";

import ScheduleController from "../pages/scheduleAppointment/controller/ScheduleController";
import ScheduleView from "../pages/scheduleAppointment/view/ScheduleView";
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
                    AppmntUseCasesFactory.ValidateAppmntUseCase()
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
                    AppmntUseCasesFactory.ValidateAppmntUseCase())
            },
            // {
            //     name: 'tickets',
            //     path: 'tickets',
            //     routeController: new TicketsGeneratorController(new TicketsGeneratorView(layout)),
            // }
        ]
    },
    {
        name: 'notFound',
        path: 'notFound',
        routeController: new NotFoundController(new NotFoundView(layout))
    }
]