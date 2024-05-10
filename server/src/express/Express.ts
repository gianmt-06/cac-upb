
import express, { Application } from 'express'
// import cors from 'cors';
import Environment from './config/Environment';
import ExpressRouter from './route/ExpressRouter';

export default class Express {
    private readonly app: Application
    private readonly env: Environment

    constructor(
        private readonly expressRouter: ExpressRouter[]
    ) {
        this.app = express();
        this.env = new Environment();
        this.config();
        this.routes();
    }

    public getApp = (): Application => {
        return this.app;
    }

    config = (): void => {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes = (): void => {
        this.expressRouter.forEach(router => {
            this.app.use(router.path, router.router)
        })
    }

    start = () => {
        this.app.listen(this.env.PORT, () => {
            console.log(`Server running on http://${this.env.HOST}:${this.env.PORT}`)
        })
    }
}

