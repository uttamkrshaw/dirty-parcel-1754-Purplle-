import {
    ERROR,
    GET_BRAND,
    GET_CATEGORY,
    GET_PRODUCTS,
    GET_PRODUCT_TYPE,
    GET_SINGLE_PRODUCT,
    GET_TAG,
    LOADING
} from "../ActionTypes/actionType"

const initialState = {
    isLoading: false,
    isError: false,
    // products: JSON.parse(localStorage.getItem("products")) || [],
    // singleProduct: JSON.parse(localStorage.getItem("singleProduct")) || []
    products: [],
    singleProduct: []
}

export const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError: false
            }
        case GET_SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: payload
            }
        case GET_CATEGORY:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError: false
            }
        case GET_BRAND:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError: false
            }
        case GET_TAG:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError: false
            }
        case GET_PRODUCT_TYPE:
            return {
                ...state,
                products: payload,
                isLoading: false,
                isError: false
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
