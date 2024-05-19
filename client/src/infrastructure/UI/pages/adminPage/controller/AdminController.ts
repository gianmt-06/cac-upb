import ControllerInterface from "../../../types/ControllerInterface.js"
import AdminView from "../view/AdminView.js"

export default class AdminController implements ControllerInterface {
  constructor(private readonly adminView: AdminView) {}

  public init = (): void => {
    this.adminView.render()
  }
}