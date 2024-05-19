export default class DBActionsConfig {
  DEFAULT = "__NoActionSpecified";
  GET_USER: string;
  GET_LOCATION: string;
  GET_LOCATIONS: string;

  CREATE_USER: string;
  UPDATE_USER: string;

  CREATE_CLIENT: string;
  GET_CLIENT: string;
  GET_CLIENT_BY_DOC: string;
  GET_USER_BY_EMAIL: string;

  GET_APPOINTMENT_BY_CODE: string;
  CREATE_APPOINTMENT: string;
  UPDATE_APPOINTMENT: string;
  DELETE_APPOINTMENT: string;

  constructor() {
    this.GET_USER = process.env["PG_GET_USER"] ?? this.DEFAULT;
    this.CREATE_USER = process.env["PG_CREATE_USER"] ?? this.DEFAULT;
    this.UPDATE_USER = process.env["PG_UPDATE_USER"] ?? this.DEFAULT;
    this.GET_USER_BY_EMAIL = process.env["PG_GET_USER_BY_EMAIL"] ?? this.DEFAULT;
    
    this.GET_LOCATION = process.env["PG_GET_LOCATION"] ?? this.DEFAULT;
    this.GET_LOCATIONS = process.env["PG_GET_LOCATIONS"] ?? this.DEFAULT;
    
    this.CREATE_CLIENT = process.env["PG_CREATE_CLIENT"] ?? this.DEFAULT;
    this.GET_CLIENT = process.env["PG_GET_CLIENT"] ?? this.DEFAULT;
    this.GET_CLIENT_BY_DOC = process.env["PG_GET_CLIENT_BY_DOC"] ?? this.DEFAULT;

    this.GET_APPOINTMENT_BY_CODE = process.env["PG_GET_APPOINTMENT_BY_CODE"] ?? this.DEFAULT;
    this.CREATE_APPOINTMENT = process.env["PG_CREATE_APPOINTMENT"] ?? this.DEFAULT;
    this.UPDATE_APPOINTMENT = process.env["PG_UPDATE_APPOINTMENT"] ?? this.DEFAULT;
    this.DELETE_APPOINTMENT = process.env["PG_DELETE_APPOINTMENT"] ?? this.DEFAULT;
  }
}
