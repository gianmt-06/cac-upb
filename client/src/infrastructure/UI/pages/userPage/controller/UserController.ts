import GetNextTicketUseCasePort from "../../../../../app/ticket/domain/port/driver/GetNextTicket/GetNextTicketUseCasePort.js"
import ControllerInterface from "../../../types/ControllerInterface.js"
import UserView from "../view/UserView.js"

export default class UserController implements ControllerInterface {
  constructor(
    private readonly userView: UserView,
    private readonly getTicketUseCase: GetNextTicketUseCasePort
    ) {}

  public init = (): void => {
    this.userView.render()
    this.userView.getTicketHandler(this.getTicketUseCase.getNextTicket)
  }
}