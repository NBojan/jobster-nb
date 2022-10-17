import { authorization, checkUnauthorized, customFetch } from "../../utils/axios";

export const getJobsThunk =  async (_, thunkAPI) => {
    const { search, searchStatus, searchType, sort, page } = thunkAPI.getState().allJobs;
    
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    
    if(search) url = url + `&search=${search}`;

    const response = await customFetch(url, authorization(thunkAPI))
    .catch(error => checkUnauthorized(error, thunkAPI));
    
    if(!response.data) return thunkAPI.rejectWithValue(response);
    else return response.data
}

export const getStatsThunk = async (_, thunkAPI) => {
    const response = await customFetch("/jobs/stats", authorization(thunkAPI))
    .catch(error => checkUnauthorized(error, thunkAPI));

    if(!response.data) return thunkAPI.rejectWithValue(response);
    else return response.data;
}