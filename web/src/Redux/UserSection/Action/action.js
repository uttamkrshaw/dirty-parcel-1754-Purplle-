import {
    ORDER_PLACED,
    PLACE_ORDER,
    USER_DETAILS,
    USER_TOKEN,
    SIGN_OUT
} from "../ActionTypes/actionType"
import axios from "axios"
// --------------->>>>>>>> Custom Action Types For Reducers <<<<<<<<-------------------

export const userData = (payload) => {
    localStorage.setItem("user", JSON.stringify(payload))
    localStorage.setItem("isAuth", JSON.stringify(true))
    localStorage.setItem("userorder", JSON.stringify(payload[0].order.ORDERS));
    localStorage.setItem("fav", JSON.stringify(payload[0].order.FAV))
    return {type: USER_DETAILS, payload}
}

export const userToken = (payload) => {
    localStorage.setItem("token", JSON.stringify(payload))
    return {type: USER_TOKEN, payload}
}

export const signout = () => {
    localStorage.clear();
    return {type: SIGN_OUT}
}

// --------------->>>>>>>>Custom Funtions To Add Ordered Data <<<<<<<<-------------------

export const addUserOrders = (payload) => {
    const userorder = JSON.parse(localStorage.getItem("userorder"))
    return {type: ORDER_PLACED, payload}
}

export const updateUserOrderList = (payload) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("token"))
    const url = `https://shy-mittens-mite.cyclic.app/users/update/${
        user[0]._id
    }`
    let data = {
        order:{
            ORDERS: payload.userorder,
            FAV: payload.fav
        }
    }
    console.log("data",data);
    axios.patch(url, data, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    })
}
