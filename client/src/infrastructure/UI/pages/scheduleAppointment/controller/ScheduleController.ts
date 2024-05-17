import GetClientUseCasePort from "../../../../../app/client/domain/port/driver/GetClient/GetClientUseCasePort.js"
import ControllerInterface from "../../../types/ControllerInterface.js"
import ScheduleView from "../view/ScheduleView.js"

export default class ScheduleController implements ControllerInterface {
  constructor(
    private readonly scheduleView: ScheduleView,
    private readonly getClientUseCase: GetClientUseCasePort  
  ) {
    // this.getClientUseCase.getClient('1').then(value => {
    //   console.log('El cliente es:');
    //   console.log(value);
    // }).catch(error => console.log(error));
  }

  public init = (): void => {
    this.scheduleView.render();
    this.scheduleView.getClientData(this.getClientUseCase.getClient);
  }
}