import {USER_DETAILS,USER_TOKEN} from "../ActionTypes/actionType"

export const userData = (payload) => {
    localStorage.setItem("user",JSON.stringify(payload))
    return {type: USER_DETAILS, payload}
}

export const userToken = (payload) => {
    localStorage.setItem("token",JSON.stringify(payload))
    return {type: USER_TOKEN, payload}
}
