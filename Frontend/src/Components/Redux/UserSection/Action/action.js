import {USER_DETAILS, USER_TOKEN} from "../ActionTypes/actionType"
import axios from "axios"
// --------------->>>>>>>> Custom Action Types For Reducers <<<<<<<<-------------------

export const userData = (payload) => {
    localStorage.setItem("user", JSON.stringify(payload))
    localStorage.setItem("isAuth", JSON.stringify(true))
    return {type: USER_DETAILS, payload}
}

export const userToken = (payload) => {
    localStorage.setItem("token", JSON.stringify(payload))
    return {type: USER_TOKEN, payload}
}

// --------------->>>>>>>>Custom Funtions To Add Ordered Data <<<<<<<<-------------------

export const orderPlaced = (payload) => (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"))
    const token = JSON.parse(localStorage.getItem("token"))

    const data = {
        order: {
            ORDERS: payload.cart,
            FAV: payload.fav
        }
    }
    const url = `http://localhost:4500/users/update/${
        user[0]._id
    }`
    axios.patch(url, data, {
        'headers': {
            'Authorization': `bearer ${token}`
        }
    }).then((res) => console.log(res)).catch((err) => console.log(err))
}
