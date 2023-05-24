import axios from "axios"
import {GET_PRODUCTS, GET_SINGLE_PRODUCT} from "../ActionTypes/actionType"

export const getProducts = (payload) => {
    localStorage.setItem("products", JSON.stringify(payload))
    return {type: GET_PRODUCTS, payload}
}

export const getSingleProducts = (payload) => {
    localStorage.setItem("singleProduct", JSON.stringify(payload))
    return {type: GET_SINGLE_PRODUCT, payload}
}


export const getProductData = (payload) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token"))
    const url = `http://localhost:4500/product/`
    axios.get(url, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    }).then((res) => dispatch(getProducts(res.data))).catch((err) => console.log(err))
}
