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
    }
}