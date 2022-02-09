import { Request, Response } from "express";
import { OrderController } from "../controllers/crmController";



export class Routes {
    public orderController: OrderController = new OrderController();

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successfulll!!!!'
                })
            });

        // Create a new order
        app.route('/orders')
            .post(this.orderController.addNewOrder);

        // Orders 
        app.route('/orders')
            // GET endpoint 
            .get(this.orderController.getAllOrders);

        // New order
        app.route('/orders/getNew')
            // GET endpoint 
            .get(this.orderController.getNewOrders);

        // Waiting delivery order
        app.route('/orders/waitingDeliver')
            // GET endpoint 
            .get(this.orderController.getWaitingDeliverOrders);

        // Waiting payment order
        app.route('/orders/waitingPayment')
            // GET endpoint 
            .get(this.orderController.getWaitingPaymentOrders);
    }
}