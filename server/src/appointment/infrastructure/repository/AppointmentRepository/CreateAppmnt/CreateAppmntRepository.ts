
import Database from '../../../../../postgresql/database/Database'
import CreateAppmntRepositoryPort from '../../../../domain/port/driven/CreateAppmntPort'

export default class CreateAppmntRepository implements CreateAppmntRepositoryPort {
  name: string

  constructor() {
    this.name = 'CreateAppmntRepository'
  }

  public create = async (): Promise<boolean> => {
    const database = new Database();
    const response = database.query("SELECT * FROM clientTypes;");
    console.log('response');
    
    const data = await response;
    console.log(data.rows);
    return true;
  }
}
  
