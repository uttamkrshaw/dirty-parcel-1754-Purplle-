import {GET_PRODUCTS, GET_SINGLE_PRODUCT} from "../ActionTypes/actionType"

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
                products: payload
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: payload
            }
        default:
            return state
    }
}
