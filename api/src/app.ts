import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
const cors = require("cors");

import { Routes } from "./routes/crmRoutes";


class App {

    public app: express.Application;
    public mongoUrl: string = 'mongodb://127.0.0.1:27017/Shopping';  
    public routePrv: Routes = new Routes();

    constructor() {
        this.app = express();
        this.config();        
        this.routePrv.routes(this.app);     
        this.mongoSetup();
    }

    private mongoSetup(): void{
        require("mongoose").Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }

    private config(): void{
        // Giúp chúng ta tiếp nhận dữ liệu từ body của request
        this.app.use(cors({credentials: true, origin: true}))
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;