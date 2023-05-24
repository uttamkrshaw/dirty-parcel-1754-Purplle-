import {USER_DETAILS,USER_TOKEN} from "../ActionTypes/actionType"

export const userData = (payload) => {
    return {type: USER_DETAILS, payload}
}

export const userToken = (payload) => {
    return {type: USER_TOKEN, payload}
}
