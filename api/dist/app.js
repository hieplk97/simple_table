"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const crmRoutes_1 = require("./routes/crmRoutes");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://127.0.0.1:27017/Shopping';
        this.routePrv = new crmRoutes_1.Routes();
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
    }
    mongoSetup() {
        require("mongoose").Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    config() {
        // Giúp chúng ta tiếp nhận dữ liệu từ body của request
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map