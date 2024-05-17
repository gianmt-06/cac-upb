import ControllerInterface from "../../../types/ControllerInterface.js"
import HomeView from "../view/HomeView.js"

export default class HomeController implements ControllerInterface {
  constructor(private readonly homeView: HomeView) {}

  public init = (): void => {
    this.homeView.render()
  }
}