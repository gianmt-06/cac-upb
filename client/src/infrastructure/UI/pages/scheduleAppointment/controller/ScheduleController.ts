import CreateAppmntUseCasePort from "../../../../../app/appointment/domain/port/driver/CreateAppmnt/CreateAppmntUseCasePort.js";
import GetAppmntTypesUseCasePort from "../../../../../app/appointment/domain/port/driver/GetAppmntTypes/GetAppmntTypesUseCasePort.js";
import GetClientUseCasePort from "../../../../../app/client/domain/port/driver/GetClient/GetClientUseCasePort.js"
import GetLocationsUseCasePort from "../../../../../app/location/domain/port/driver/GetLocations/GetLocationsUseCasePort.js";
import ControllerInterface from "../../../types/ControllerInterface.js"
import ScheduleView from "../view/ScheduleView.js"

export default class ScheduleController implements ControllerInterface {
  constructor(
    private readonly scheduleView: ScheduleView,
    private readonly getClientUseCase: GetClientUseCasePort,
    private readonly getLocationsUseCase: GetLocationsUseCasePort,
    private readonly getAppmntTypesUseCase: GetAppmntTypesUseCasePort,
    private readonly createAppmntUseCase: CreateAppmntUseCasePort
  ) {}

  public init = (): void => {
    this.scheduleView.render();
    this.scheduleView.getClientData(this.getClientUseCase.getClient);
    this.scheduleView.getLocations(this.getLocationsUseCase.getLocations);
    this.scheduleView.getAppmntTypes(this.getAppmntTypesUseCase.getAppmntTypes)
    this.scheduleView.createAppmnt(this.createAppmntUseCase.createAppmnt)
  }
}