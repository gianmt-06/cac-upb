import ValidateAppmntUseCasePort from "../../../../../app/appointment/domain/port/driver/ValidateAppmnt/ValidatAppmntUseCasePort.js"
import ControllerInterface from "../../../types/ControllerInterface.js"
import RescheduleView from "../view/RescheduleView.js"

export default class RescheduleController implements ControllerInterface {
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