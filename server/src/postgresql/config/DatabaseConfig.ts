export default class DatabaseEnvConfig {
  DATABASE_HOST: string;
  DATABASE_PORT: number;
  DATABASE_NAME: string;
  DATABASE_USER: string;
  DATABASE_PASSWORD: string;

  constructor() {
    this.DATABASE_HOST = process.env["DB_HOST"] ?? "localhost";
    this.DATABASE_PORT = parseInt(process.env["DB_PORT"] ?? "5432");
    this.DATABASE_NAME = process.env["DB_NAME"] ?? "mydb";
    this.DATABASE_USER = process.env["DB_USER"] ?? "root";
    this.DATABASE_PASSWORD = process.env["DB_PASSWORD"] ?? "123";
  }
}
