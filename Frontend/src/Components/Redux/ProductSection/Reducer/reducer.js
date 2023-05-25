import {ERROR, GET_PRODUCTS, GET_SINGLE_PRODUCT, LOADING} from "../ActionTypes/actionType"

const initialState = {
    isLoading: false,
    isError: false,
    products: JSON.parse(localStorage.getItem("products")) || [],
    singleProduct: JSON.parse(localStorage.getItem("singleProduct")) || []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                isLoading:false,
                isError:false
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: payload
            }
        case LOADING:
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:
            return state
    }
}
