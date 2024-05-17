import GetClientUseCaseFactory from "../../../app/client/infrastructure/factory/GetClientUseCaseFactory/GetClientUseCaseFactory";
import HomeController from "../pages/home/controller/HomeController";
import HomeView from "../pages/home/view/HomeView";

import RescheduleController from "../pages/rescheduleAppointment/controller/RescheduleController";
import RescheduleView from "../pages/rescheduleAppointment/view/RescheduleView";

import ScheduleController from "../pages/scheduleAppointment/controller/ScheduleController";
import ScheduleView from "../pages/scheduleAppointment/view/ScheduleView";

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
        routeController: new ScheduleController(new ScheduleView(layout), GetClientUseCaseFactory.createUseCase()),
        childrens: [
            {
                name: 'reagendar',
                path: 'modify',
                routeController: new RescheduleController(new RescheduleView(layout)),
                // childrens: [
                //     {
                //         path: ':id',
                //         routeController: new AppointmentController(new AppointmentView(), new AppointmentModel()),
                //     }
                // ]
            }
        //     {
        //         name: 'cancelar',
        //         path: 'cancel',
        //         routeController: new CancelAppmtController(new CancelAppmtView(), new CancelAppmtModel())
        //     }
        ]
    },
    {
        name: 'notFound',
        path: 'notFound',
        routeController: new NotFoundController(new NotFoundView(layout))
    }
]