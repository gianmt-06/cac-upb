import ControllerInterface from "../../../types/ControllerInterface.js"
import RescheduleView from "../view/RescheduleView.js"

export default class RescheduleController implements ControllerInterface {
  constructor(private readonly homeView: RescheduleView) {}

  public init = (): void => {
    this.homeView.render()
  }
}