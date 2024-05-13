import Repository from "../../../shared/infrastructure/repository/Repository";
import LocationDTO from "../../domain/model/locationDTO/LocationDTO";

export interface LocationRepositoryInterface extends Repository<LocationDTO, string> {}