import axios from "axios"
import {ERROR, GET_PRODUCTS, GET_SINGLE_PRODUCT, LOADING} from "../ActionTypes/actionType"

export const loading = () => {
    return {type: LOADING}
}

export const error = () => {
    return {type: ERROR}
}

export const getProducts = (payload) => {
    localStorage.setItem("products", JSON.stringify(payload))
    return {type: GET_PRODUCTS, payload}
}

export const getSingleProducts = (payload) => {
    localStorage.setItem("singleProduct", JSON.stringify(payload))
    return {type: GET_SINGLE_PRODUCT, payload}
}


export const getProductData = (payload) => (dispatch) => {
    dispatch(loading())
    const token = JSON.parse(localStorage.getItem("token"))
    const url = `http://localhost:4500/product/getall?page=${payload}`
    axios.get(url, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    }).then((res) => dispatch(getProducts(res.data))).catch((err) => dispatch(error()))
}
