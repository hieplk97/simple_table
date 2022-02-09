import * as mongoose from 'mongoose';
import { OrderSchema } from '../models/crmModel';
import { Request, Response } from 'express';

const Order = mongoose.model('Orders', OrderSchema);

export class OrderController {

    public addNewOrder(req: Request, res: Response) {
        let newContact = new Order(req.body);

        newContact.save((err, contact) => {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    }

    public getAllOrders(req: Request, res: Response) {
        Order.find({}, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }

    public getNewOrders(req: Request, res: Response) {
        Order.find({ deliver: 1, checkout: 1 }, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }

    public getWaitingDeliverOrders(req: Request, res: Response) {
        Order.find({ deliver: 1}, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }

    public getWaitingPaymentOrders(req: Request, res: Response) {
        Order.find({ checkout: 1}, (err, order) => {
            if (err) {
                res.send(err);
            }
            res.json(order);
        });
    }
}