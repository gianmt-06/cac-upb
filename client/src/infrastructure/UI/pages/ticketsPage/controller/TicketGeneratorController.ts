import ControllerInterface from "../../../types/ControllerInterface.js"
import TicketsGeneratorView from "../view/TicketGeneratorView.js"

export default class TicketsGeneratorController implements ControllerInterface {
  constructor(private readonly ticketGeneratorView: TicketsGeneratorView) {}

  public init = (): void => {
    this.ticketGeneratorView.render()
  }
}