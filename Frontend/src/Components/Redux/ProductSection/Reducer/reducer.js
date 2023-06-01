import {
    CHANGE_BRAND,
    CHANGE_CATEGORY,
    CHANGE_PRODUCT,
    CHANGE_TAG,
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
    products: [],
    singleProduct: [],
    category: "",
    brand: "",
    tag: "",
    product: ""
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
                singleProduct: payload,
                isLoading: false,
                isError: false
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
        case CHANGE_BRAND:
            return {
                ...state,
                brand: payload,
                product: "",
                tag: "",
                category: ""
            }
        case CHANGE_CATEGORY:
            return {
                ...state,
                brand: "",
                product: "",
                tag: "",
                category: payload
            }
        case CHANGE_TAG:
            return {
                ...state,
                brand: "",
                product: "",
                tag: payload,
                category: ""
            }
        case CHANGE_PRODUCT:
            return {
                ...state,
                brand: "",
                product: payload,
                tag: "",
                category: ""
            }
        default:
            return state
    }
}
