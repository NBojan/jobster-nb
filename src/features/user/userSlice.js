import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { registerUserThunk, loginUserThunk, updateUserThunk, clearStoreThunk } from "./userThunk";
import { addUserToLocal, getUserFromLocal, removeUserFromLocal } from "../../utils/localStorage";

const initialState = {
    user: getUserFromLocal(),
    isLoading: false,
    sidebarOpen: false,
}

export const registerUser = createAsyncThunk("user/registerUser", registerUserThunk);
export const loginUser = createAsyncThunk("user/loginUser", loginUserThunk);
export const updateUser = createAsyncThunk("user/updateUser", updateUserThunk);
export const clearStore = createAsyncThunk("user/clearStore", clearStoreThunk);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: (state, action) => {
            state.user = null;
            state.sidebarOpen = false;
            removeUserFromLocal();
            if(action.payload) toast.success(action.payload);
        },
        toggleSidebar: (state) => {
            state.sidebarOpen = !state.sidebarOpen;
        }
    },
    extraReducers: {
        [registerUser.pending]: (state) => {
            state.isLoading = true;
        },
        [registerUser.fulfilled]: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            addUserToLocal(user);
            state.isLoading = false;
            toast.success(`Welcome ${user.name}`);
        },
        [registerUser.rejected]: (state, action) => {
            state.isLoading = false;
            toast.error(action.payload);
        },
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            addUserToLocal(user);
            state.isLoading = false;
            toast.success(`Welcome back ${user.name}`);
        },
        [loginUser.rejected]: (state, action) => {
            state.isLoading = false;
            toast.error(action.payload);
        },
        [updateUser.pending]: (state) => {
            state.isLoading = true;
        },
        [updateUser.fulfilled]: (state, action) => {
            const { user } = action.payload;
            state.user = user;
            addUserToLocal(user);
            state.isLoading = false;
            toast.success("user updated!");
        },
        [updateUser.rejected]: (state, action) => {
            state.isLoading = false;
            toast.error(action.payload);
        }
    }
})

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer