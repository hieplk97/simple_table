import * as Types from '../commons/Types';

const defaultState = {
    dataOrderItems: [],
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