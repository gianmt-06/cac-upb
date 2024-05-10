import { Client } from "pg";
import Environment from "../config/Environment";

export default class Database {
    private client: Client;
    private readonly env: Environment;

    constructor(){
        this.env = new Environment();
        this.client = new Client({
            user: this.env.DATABASE_USER,
            host: this.env.DATABASE_HOST,
            database: this.env.DATABASE_NAME,
            password: this.env.DATABASE_PASSWORD,
            port: this.env.DATABASE_PORT
        })
        this.connect();
    }

    connect(){
        this.client.connect(function (err) {
            if (err) throw err;
            console.log('Connected!');
        })
    }
    
    query(query: string) {
        return this.client.query(query)
    }
}   