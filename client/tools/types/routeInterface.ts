export default interface RouteInterface {
    name?: string
    path: string
    view: string
    childrens?: RouteInterface[]
}