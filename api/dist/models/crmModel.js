"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.OrderSchema = new Schema({
    code: {
        type: String,
    },
    orderDate: {
        type: String,
    },
    customer: {
        type: String
    },
    deliver: {
        type: Number
    },
    checkout: {
        type: Number
    },
    cod: {
        type: String
    },
    total: {
        type: String
    },
    channel: {
        type: String
    },
});
//# sourceMappingURL=crmModel.js.map