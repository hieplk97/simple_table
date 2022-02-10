"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.orderController = new crmController_1.OrderController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
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
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map