import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const OrderSchema = new Schema({
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
        type: Number            
    },
    total: {
        type: Number            
    },
    channel: {
        type: String            
    },
    
});