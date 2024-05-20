import GetAppmntTypesUseCasePort from "../../../../../app/appointment/domain/port/driver/GetAppmntTypes/GetAppmntTypesUseCasePort.js"
import ValidateAppmntUseCasePort from "../../../../../app/appointment/domain/port/driver/ValidateAppmnt/ValidatAppmntUseCasePort.js"
import GetLocationsUseCasePort from "../../../../../app/location/domain/port/driver/GetLocations/GetLocationsUseCasePort.js"
import ControllerInterface from "../../../types/ControllerInterface.js"
import RescheduleView from "../view/RescheduleView.js"

export default class RescheduleController implements ControllerInterface {
  constructor(
    private readonly homeView: RescheduleView,
    private readonly validateAppmntUseCase: ValidateAppmntUseCasePort,
    private readonly getLocationsUseCase: GetLocationsUseCasePort,
    private readonly getAppmntTypesUseCase: GetAppmntTypesUseCasePort,
  ) {}

  public init = (): void => {
    this.homeView.render()
    this.setValidateAction(this.validateAppmntUseCase.validate)
  }

  public setValidateAction(action: Function){
    this.homeView.setValidateAction(action, this.homeView.loadScheduleForm);
    this.homeView.setActionsScheduleForm(this.getLocationsUseCase.getLocations, this.getAppmntTypesUseCase.getAppmntTypes)
  }
}