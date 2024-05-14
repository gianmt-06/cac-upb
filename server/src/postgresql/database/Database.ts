import { Client } from "pg";
import DatabaseEnvConfig from "../config/DatabaseConfig";

export default class Database {
    public static instance: Database;

    private client: Client;
    private readonly env: DatabaseEnvConfig;

    constructor() {
        this.env = new DatabaseEnvConfig();
        this.client = new Client({
            user: this.env.DATABASE_USER,
            host: this.env.DATABASE_HOST,
            database: this.env.DATABASE_NAME,
            password: this.env.DATABASE_PASSWORD,
            port: this.env.DATABASE_PORT
        })
        this.connect();
    }

    public static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }

    connect = () => {
        try {
            this.client.connect(err => {
                if (err) throw err;
            })
        } catch (error) {
            console.log(error);
        }
    }

    query = (query: string, values?: any[]) => {
        try {
            return this.client.query(query, values)
        } catch (error) {  
            throw Error
        }
    }
}   