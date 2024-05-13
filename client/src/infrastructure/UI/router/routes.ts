import RouteInterface from "../../../types/RouteInterface";

import HomeController from "../controller/HomeController";
import HomeView from "../view/HomeView";

import NotFoundController from "../controller/NotFoundController";
import NotFoundView from "../view/NotFoundView";

import AppointmentController from "../controller/AppointmentController";
import AppointmentModel from "../../../domain/model/AppointmentModel";
import AppointmentView from "../view/AppointmentView";

import ModifyAppmtController from "../controller/ModifyAppmtController";
import ModifyAppmtView from "../view/ModifyAppmtView";
import ModifyAppmtModel from "../../../domain/model/ModifyAppmtModel";

import CancelAppmtController from "../controller/CancelAppmtController";
import CancelAppmtView from "../view/CancelAppmtView";
import CancelAppmtModel from "../../../domain/model/CancelAppmtModel";

export const routes: RouteInterface[] = [
    {
        name: 'home',
        path: 'home',
        routeController: new HomeController(new HomeView()),
    },
    {
        name: 'citas',
        path: 'citas',
        routeController: new AppointmentController(new AppointmentView(), new AppointmentModel()),
        childrens: [
            {
                name: 'reagendar',
                path: 'modify',
                routeController: new ModifyAppmtController(new ModifyAppmtView(), new ModifyAppmtModel()),
                childrens: [
                    {
                        path: ':id',
                        routeController: new AppointmentController(new AppointmentView(), new AppointmentModel()),
                    }
                ]
            },
            {
                name: 'cancelar',
                path: 'cancel',
                routeController: new CancelAppmtController(new CancelAppmtView(), new CancelAppmtModel())
            }
        ]
    },
    {
        name: 'notFound',
        path: 'notFound',
        routeController: new NotFoundController(new NotFoundView())
    }
]