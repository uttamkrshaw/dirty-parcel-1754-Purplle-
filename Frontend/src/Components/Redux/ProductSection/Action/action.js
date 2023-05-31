import axios from "axios"
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

// --------------->>>>>>>> Custom Action Types For Reducers <<<<<<<<-------------------


export const loading = () => {
    return {type: LOADING}
}

export const error = () => {
    return {type: ERROR}
}

export const getProducts = (payload) => { // localStorage.setItem("products", JSON.stringify(payload))
    return {type: GET_PRODUCTS, payload}
}

export const getSingleProducts = (payload) => { // localStorage.setItem("singleProduct", JSON.stringify(payload))
    return {type: GET_SINGLE_PRODUCT, payload}
}

export const getCategoryProducts = (payload) => { // localStorage.setItem("products", JSON.stringify(payload))
    return {type: GET_CATEGORY, payload}
}

export const getBrandProducts = (payload) => { // localStorage.setItem("products", JSON.stringify(payload))
    return {type: GET_BRAND, payload}
}
export const getTagProducts = (payload) => { // localStorage.setItem("products", JSON.stringify(payload))
    return {type: GET_TAG, payload}
}

export const getProductType = (payload) => { // localStorage.setItem("products", JSON.stringify(payload))
    return {type: GET_PRODUCT_TYPE, payload}
}

// --------------->>>>>>>>Custom Funtions To Get Data <<<<<<<<-------------------


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


export const getCategoryProductData = (payload) => (dispatch) => { // dispatch(loading())
    const token = JSON.parse(localStorage.getItem("token"))
    const url = `http://localhost:4500/product/getcat?page=1&category=${payload}`
    axios.get(url, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    }).then((res) => dispatch(getCategoryProducts(res.data))).catch((err) => dispatch(error()))
}


export const getBrandProductData = (payload) => (dispatch) => { // dispatch(loading())
    const token = JSON.parse(localStorage.getItem("token"))
    const url = `http://localhost:4500/product/getbrand?page=1&brand=${payload}`
    axios.get(url, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    }).then((res) => dispatch(getBrandProducts(res.data))).catch((err) => dispatch(error()))
}


export const getTagProductData = (payload) => (dispatch) => { // dispatch(loading())
    const token = JSON.parse(localStorage.getItem("token"))
    const url = `http://localhost:4500/product/gettag?page=1&tag=${payload}`
    axios.get(url, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    }).then((res) => dispatch(getTagProducts(res.data))).catch((err) => dispatch(error()))
}


export const getProductTypeData = (payload) => (dispatch) => { // dispatch(loading())
    const token = JSON.parse(localStorage.getItem("token"))
    const url = `http://localhost:4500/product/gettype?page=1&type=${payload}`
    axios.get(url, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    }).then((res) => dispatch(getProductType(res.data))).catch((err) => dispatch(error()))
}



export const getSingleProductData = (payload) => (dispatch) => {
    dispatch(loading())
    const token = JSON.parse(localStorage.getItem("token"))
    const url = `http://localhost:4500/product/get/${payload}`
    axios.get(url, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    }).then((res) => dispatch(getSingleProducts(res.data))).catch((err) => dispatch(error()))
}
