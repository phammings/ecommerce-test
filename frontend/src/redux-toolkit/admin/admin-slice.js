import { createSlice } from "@reduxjs/toolkit";

import { LoadingStatus } from "../../types/types";
import {
    addPerfume,
    deletePerfume,
    fetchAllUsers,
    fetchAllUsersByQuery,
    fetchUserInfo,
    fetchUserInfoByQuery,
    updatePerfume
} from "./admin-thunks";

export const initialState = {
    users: [],
    user: {},
    errors: {},
    pagesCount: 1,
    totalElements: 0,
    isPerfumeAdded: false,
    isPerfumeEdited: false,
    isPerfumeDeleted: false,
    loadingState: LoadingStatus.LOADING
};

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        setAdminLoadingState(state, action) {
            state.loadingState = action.payload;
        },
        resetAdminState(state) {
            state.users = [];
            state.user = {};
            state.errors = {};
            state.isPerfumeAdded = false;
            state.isPerfumeEdited = false;
            state.isPerfumeDeleted = false;
            state.pagesCount = 1;
            state.totalElements = 0;
            state.loadingState = LoadingStatus.LOADING;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addPerfume.pending, (state) => {
                state.loadingState = LoadingStatus.LOADING;
            })
            .addCase(addPerfume.fulfilled, (state) => {
                state.isPerfumeAdded = true;
                state.errors = {};
                state.loadingState = LoadingStatus.LOADED;
            })
            .addCase(addPerfume.rejected, (state, action) => {
                state.isPerfumeAdded = false;
                state.errors = action.payload;
                state.loadingState = LoadingStatus.LOADED;
            })
            .addCase(updatePerfume.pending, (state) => {
                state.loadingState = LoadingStatus.LOADING;
            })
            .addCase(updatePerfume.fulfilled, (state) => {
                state.isPerfumeEdited = true;
                state.errors = {};
                state.loadingState = LoadingStatus.LOADED;
            })
            .addCase(updatePerfume.rejected, (state, action) => {
                state.isPerfumeEdited = false;
                state.errors = action.payload;
                state.loadingState = LoadingStatus.LOADED;
            })
            .addCase(deletePerfume.fulfilled, (state) => {
                state.isPerfumeDeleted = true;
                state.errors = {};
                state.loadingState = LoadingStatus.LOADED;
            })
            .addCase(fetchAllUsers.pending, (state) => {
                state.loadingState = LoadingStatus.LOADING;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.users = action.payload.items;
                state.pagesCount = action.payload.pagesCount;
                state.totalElements = action.payload.totalElements;
                state.loadingState = LoadingStatus.LOADED;
            })
            .addCase(fetchUserInfo.pending, (state) => {
                state.loadingState = LoadingStatus.LOADING;
            })
            .addCase(fetchUserInfo.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loadingState = LoadingStatus.LOADED;
            })
            .addCase(fetchUserInfoByQuery.pending, (state) => {
                state.loadingState = LoadingStatus.LOADING;
            })
            .addCase(fetchUserInfoByQuery.fulfilled, (state, action) => {
                state.user = action.payload;
                state.loadingState = LoadingStatus.LOADED;
            })
            .addCase(fetchAllUsersByQuery.pending, (state) => {
                state.loadingState = LoadingStatus.LOADING;
            })
            .addCase(fetchAllUsersByQuery.fulfilled, (state, action) => {
                state.users = action.payload;
                state.loadingState = LoadingStatus.LOADED;
            });
    }
});

export const { setAdminLoadingState, resetAdminState } = adminSlice.actions;
export default adminSlice.reducer;
