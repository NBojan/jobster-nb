import { toast } from "react-toastify";
import { getJobsThunk, getStatsThunk } from "./allJobsThunk";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialFilterState = {
    search: "",
    searchStatus: "all",
    searchType: "all",
    sort: "latest",
    sortOptions: ["latest", "oldest", "a-z", "z-a"]
}
const initialState = {
    isLoading: true,
    jobs: [],
    page: 1,
    totalJobs: 0,
    numberOfPages: 0,
    stats: {},
    monthlyApp: [],
    ...initialFilterState
}


export const getJobs = createAsyncThunk("allJobs/getJobs", getJobsThunk);
export const getStats = createAsyncThunk("allJobs/getStats", getStatsThunk);

const allJobsSlice = createSlice({
    name: "allJobs",
    initialState,
    reducers: {
        setLoadingTrue: (state) => {
            state.isLoading = true;
        },
        setLoadingFalse: (state) => {
            state.isLoading = false;
        },
        updateValues: (state, action) => {
            const { name, value } = action.payload;
            state.page = 1;
            state[name] = value;
        },
        clearFilters: (state) => {
            return {...state, ...initialFilterState}
        },
        changePage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: {
        [getJobs.pending]: (state) => {
            state.isLoading = true;
        },
        [getJobs.fulfilled]: (state, action) => {
            const {jobs, numOfPages, totalJobs} = action.payload;
            state.jobs = jobs;
            state.numberOfPages = numOfPages;
            state.totalJobs = totalJobs;
            state.isLoading = false;
        },
        [getJobs.rejected]: (state, action) => {
            state.isLoading = false;
            toast.error(action.payload)
        },
        [getStats.pending]: (state) => {
            state.isLoading = true;
        },
        [getStats.fulfilled]: (state, action) => {
            const {defaultStats, monthlyApplications} = action.payload;
            state.stats = defaultStats;
            state.monthlyApp = monthlyApplications;
            console.log(defaultStats, monthlyApplications);
            state.isLoading = false;
        },
        [getStats.rejected]: (state, action) => {
            state.isLoading = false;
            toast.error(action.payload)
        }
    }
})

export const { updateValues, clearFilters, setLoadingTrue, setLoadingFalse, changePage } = allJobsSlice.actions;
export default allJobsSlice.reducer;