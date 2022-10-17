import axios from "axios";
import { clearStore } from "../features/user/userSlice";

export const customFetch = axios.create({
    baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit"
})

export const authorization = (thunkAPI) => {
    return {
        headers: {
            authorization: `Bearer ${thunkAPI.getState().user.user.token}`
        }
    }
}
export const checkUnauthorized = (error, thunkAPI) => {
    if(error.response.status === 401){
        thunkAPI.dispatch(clearStore())
        return "Unauthorized! Logging out...";
    }
    return error.response.data.msg
}