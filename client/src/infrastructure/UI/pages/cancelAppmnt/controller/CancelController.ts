import ValidateAppmntUseCasePort from "../../../../../app/appointment/domain/port/driver/ValidateAppmnt/ValidatAppmntUseCasePort.js"
import ControllerInterface from "../../../types/ControllerInterface.js"
import RescheduleView from "../view/CancelView.js"

export default class CancelController implements ControllerInterface {
  constructor(
    private readonly homeView: RescheduleView,
    private readonly validateAppmntUseCase: ValidateAppmntUseCasePort
  ) {}

  public init = (): void => {
    this.homeView.render()
    this.setValidateAction(this.validateAppmntUseCase.validate)
  }

  public setValidateAction(action: Function){
    this.homeView.setValidateAction(action, this.homeView.loadScheduleForm)
  }
}