import Repository from "../../../../../shared/infrastructure/repository/Repository";
import LocationDTO from "../../../model/locationDTO/LocationDTO";

export interface LocationRepositoryPort extends Repository<LocationDTO, string> {}