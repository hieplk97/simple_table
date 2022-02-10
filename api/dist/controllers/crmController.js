"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const mongoose = require("mongoose");
const crmModel_1 = require("../models/crmModel");
const Order = mongoose.model('Orders', crmModel_1.OrderSchema);
class OrderController {
    addNewOrder(req, res) {
        let newContact = new Order(req.body);
        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }
    getAllOrders(req, res) {
        Order.find({}, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
    getNewOrders(req, res) {
        Order.find({ deliver: 1, checkout: 1 }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
    getWaitingDeliverOrders(req, res) {
        Order.find({ deliver: 1 }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
    getWaitingPaymentOrders(req, res) {
        Order.find({ checkout: 1 }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
}
exports.OrderController = OrderController;
//# sourceMappingURL=crmController.js.map