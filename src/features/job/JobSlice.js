import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal } from "../../utils/localStorage";
import { toast } from "react-toastify";
import { addJobThunk, deleteJobThunk, editJobThunk } from "./JobThunk";

const initialState = {
    position: "",
    company: "",
    jobLocation: "",
    status: "pending",
    jobType: "full-time",
    statusOptions: ["interview", "declined", "pending"],
    jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
    isLoading: false,
    isEditing: false,
    editId: null
}

export const addJob = createAsyncThunk("job/addJob", addJobThunk);
export const deleteJob = createAsyncThunk("job/deleteJob", deleteJobThunk);
export const editJob = createAsyncThunk("job/editJob", editJobThunk);

const addJobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        updateValues: (state, action) => {
            const { name, value } = action.payload;
            state[name] = value;
        },
        clearValues: () => {
            return {...initialState, jobLocation: getUserFromLocal().location || ""}
        },
        setEditing: (state, action) => {
            return {...state, isEditing: true, ...action.payload};
        }
    },
    extraReducers: {
        [addJob.pending]: (state) => {
            state.isLoading = true;
        },
        [addJob.fulfilled]: (state) => {
            toast.success("job created");
            state.isLoading = false;
        },
        [addJob.rejected]: (state, action) => {
            toast.error(action.payload);
            state.isLoading = false;
        },
        [deleteJob.fulfilled]: (state) => {
            toast.success("job removed");
        },
        [deleteJob.rejected]: (state, action) => {
            toast.error(action.payload);
        },
        [editJob.pending]: (state) => {
            state.isLoading = true;
        },
        [editJob.fulfilled]: (state) => {
            toast.success("job updated");
            state.isLoading = false;
        },
        [editJob.rejected]: (state, action) => {
            toast.error(action.payload);
            state.isLoading = false;
        },
    }
})

export const { clearValues, updateValues, setEditing } = addJobSlice.actions;
export default addJobSlice.reducer;