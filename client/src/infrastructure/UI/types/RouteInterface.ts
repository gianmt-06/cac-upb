import ControllerInterface from "./ControllerInterface"

export default interface RouteInterfaceN {
    name?: string
    path: string
    routeController: ControllerInterface
    childrens?: RouteInterfaceN[]
}