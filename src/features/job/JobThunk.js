import { authorization, checkUnauthorized, customFetch } from "../../utils/axios";
import { getJobs, setLoadingTrue, setLoadingFalse } from "../allJobs/allJobsSlice";
import { clearValues } from "./JobSlice";

export const addJobThunk = async (job, thunkAPI) => {
    const response = await customFetch.post("/jobs", job, authorization(thunkAPI))
    .catch(error => checkUnauthorized(error, thunkAPI))

    if(!response.data) return thunkAPI.rejectWithValue(response);
    else {
        thunkAPI.dispatch(clearValues());
        return response.data
    }
}

export const deleteJobThunk = async (id, thunkAPI) => {
    thunkAPI.dispatch(setLoadingTrue());

    const response = await customFetch.delete(`/jobs/${id}`, authorization(thunkAPI))
    .catch(error => checkUnauthorized(error, thunkAPI))

    if(!response.data) {
        thunkAPI.dispatch(setLoadingFalse());
        return thunkAPI.rejectWithValue(response);
    }
    else {
        thunkAPI.dispatch(getJobs());
        return response.data
    }
}

export const editJobThunk = async (payload, thunkAPI) => {
    const response = await customFetch.patch(`/jobs/${payload.id}`, payload.job, authorization(thunkAPI))
    .catch(error => checkUnauthorized(error, thunkAPI))

    if(!response.data) return thunkAPI.rejectWithValue(response);
    else {
        thunkAPI.dispatch(clearValues());
        return response.data
    }
}