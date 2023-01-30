import { actionTypes } from "./actionTypes";

export const initialState = {
    loading: false,
    products: [],
    error: false,
    msg: null
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case actionTypes.FETCHING_START:
            return {
                loading: true,
                products: [],
                error: false, msg: null
            }
        case actionTypes.FETCHING_SUCCESS:
            return {
                loading: false,
                products: action.payload,
                error: false, msg: null
            }
        case actionTypes.FETCHING_FAILED:
            return {
                loading: false,
                products: [],
                error: true,
                msg: action.payload
            }
        default:
            return state;
    }
}                                                                                