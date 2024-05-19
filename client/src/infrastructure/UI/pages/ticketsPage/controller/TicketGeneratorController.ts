import CreateTicketUseCasePort from "../../../../../app/ticket/domain/port/driver/CreateTicket/CreateTicketUseCasePort.js"
import ControllerInterface from "../../../types/ControllerInterface.js"
import TicketsGeneratorView from "../view/TicketGeneratorView.js"

export default class TicketsGeneratorController implements ControllerInterface {
  constructor(
    private readonly ticketGeneratorView: TicketsGeneratorView,
    private readonly createTicketUseCase: CreateTicketUseCasePort
    ) {}

  public init = (): void => {
    this.ticketGeneratorView.render()
    this.ticketGeneratorView.formAction(this.createTicketUseCase.createTicket);
  }
}