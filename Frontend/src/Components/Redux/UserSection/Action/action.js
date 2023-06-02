import {ORDER_PLACED, PLACE_ORDER, USER_DETAILS, USER_TOKEN,SIGN_OUT} from "../ActionTypes/actionType"
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

export const signout = () =>{
    localStorage.clear();
    return {type:SIGN_OUT}
}

// --------------->>>>>>>>Custom Funtions To Add Ordered Data <<<<<<<<-------------------

export const addUserOrders = (payload) => {
    const userorder = JSON.parse(localStorage.getItem("userorder"))
    console.log("userorder1", userorder);
    return {type: ORDER_PLACED, payload}
}

export const updateUserOrderList = () => {

    const user = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("token"))
    const fav = JSON.parse(localStorage.getItem("fav"))
    const userorder = JSON.parse(localStorage.getItem("userorder"))
    // const url = `http://localhost:4500/users/update/${
    //     user[0]._id
    // }`
    // const data = {
    //     ORDERS: userorder,
    //     FAV: fav
    // }
    // axios.patch(url, data, {
    //     'headers': {
    //         'Authorization': `bearer ${token}`
    //     }
    // }).then((res) => console.log(res)).catch((err) => console.log(err))
    console.log("userorder2", userorder);
}
