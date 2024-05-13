export default class DBActionsConfig {
  DEFAULT = "__NoActionSpecified";
  GET_USER: string;
  GET_LOCATION: string;
  CREATE_USER: string;

  constructor() {
    this.GET_USER = process.env["PG_GET_USER"] ?? this.DEFAULT;
    this.GET_LOCATION = process.env["PG_GET_LOCATION"] ?? this.DEFAULT;
    this.CREATE_USER = process.env["PG_CREATE_USER"] ?? this.DEFAULT;
  }
}
