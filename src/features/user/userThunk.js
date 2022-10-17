import { customFetch, authorization, checkUnauthorized } from "../../utils/axios";
import { clearAllJobsSlice } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/JobSlice";
import { logoutUser } from "./userSlice";

export const registerUserThunk = async (user, thunkAPI) => {
    const response = await customFetch.post("/auth/register", user)
    .catch(error => error.response.data.msg)

    if(!response.data) return thunkAPI.rejectWithValue(response)
    else return response.data
}

export const loginUserThunk = async (user, thunkAPI) => {
    const response = await customFetch.post("/auth/login", user)
    .catch(error => error.response.data.msg)

    if(!response.data) return thunkAPI.rejectWithValue(response)
    else return response.data
}

export const updateUserThunk = async (user, thunkAPI) => {
    const response = await customFetch.patch("/auth/updateUser", user, authorization(thunkAPI))
    .catch(error => checkUnauthorized(error, thunkAPI));
    
    if(!response.data) return thunkAPI.rejectWithValue(response)
    else return response.data
}

export const clearStoreThunk = async (message, thunkAPI) => {
    thunkAPI.dispatch(logoutUser(message));
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(clearAllJobsSlice());
}