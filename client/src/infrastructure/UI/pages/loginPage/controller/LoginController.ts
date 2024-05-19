import ControllerInterface from "../../../types/ControllerInterface.js"
import LoginView from "../view/LoginView.js"

export default class LoginController implements ControllerInterface {
  constructor(
    private readonly loginView: LoginView
  ) {}

  public init = (): void => {
    this.loginView.render();
  }
}