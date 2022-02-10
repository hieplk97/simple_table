import axios from "axios";
import * as Types from '../commons/Types';

const getOrders = async (dispatch: any, url: string) => {
    url = url === undefined ? "": url;

    const instance = axios.create({
        headers: {
            "Authorization": "",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
            'Content-Type': 'application/json' 
        }
    });

    instance.get("http://localhost:3001/orders" + url, {}).then(res => {
        const orders = res.data;

        dispatch({
            type: Types.SET_DATA_ORDER_ITEMS,
            payload: orders
        })
    }).catch(error => {
        console.log("ERR:", error);
    })
}

export const OrderService = { getOrders };