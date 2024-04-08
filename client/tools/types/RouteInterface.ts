import ControllerInterface from "./ControllerInterface"

export default interface RouteInterface {
    name?: string
    path: string
    routeController: ControllerInterface
    childrens?: RouteInterface[]
}