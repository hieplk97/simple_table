import * as Types from '../commons/Types';

const defaultState = {
    dataOrderItems: [
        { code: "Code1", orderDate: "2021/01/01", customer: "test", deliver: 1, checkout: 2, cod: 2, total: "300", channel: "web" },
        { code: "Code2", orderDate: "2022/01/01", customer: "test1", deliver: 2, checkout: 1, cod: 1, total: "300", channel: "web" }],
};
const STReducer = function (state = defaultState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case Types.SET_DATA_ORDER_ITEMS:
            return Object.assign({}, state, {
                dataOrderItems: payload
            });
        default:
            return state;
    }
}
export default STReducer