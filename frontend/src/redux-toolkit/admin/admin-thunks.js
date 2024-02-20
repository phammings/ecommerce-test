import { createAsyncThunk } from "@reduxjs/toolkit";

import RequestService from "../../utils/request-service";
import {
    ADMIN_ADD,
    ADMIN_DELETE,
    ADMIN_EDIT,
    ADMIN_GRAPHQL_USER,
    ADMIN_GRAPHQL_USER_ALL,
    ADMIN_USER,
    ADMIN_USER_ALL
} from "../../constants/urlConstants";
import { setPerfume } from "../perfume/perfume-slice";
import { removePerfumeById } from "../perfumes/perfumes-slice";
import { userByQuery, usersByQuery } from "../../utils/graphql-query/users-query";

export const addPerfume = createAsyncThunk(
    "admin/addPerfume",
    async (data, thunkApi) => {
        try {
            const response = await RequestService.post(ADMIN_ADD, data, true, "multipart/form-data");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const updatePerfume = createAsyncThunk(
    "admin/updatePerfume",
    async (data, thunkApi) => {
        try {
            const response = await RequestService.post(ADMIN_EDIT, data, true, "multipart/form-data");
            thunkApi.dispatch(setPerfume(response.data));
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const deletePerfume = createAsyncThunk(
    "admin/deletePerfume",
    async (perfumeId, thunkApi) => {
        const response = await RequestService.delete(`${ADMIN_DELETE}/${perfumeId}`, true);
        thunkApi.dispatch(removePerfumeById(perfumeId));
        return response.data;
    }
);

export const fetchAllUsers = createAsyncThunk(
    "admin/fetchAllUsers",
    async (page) => {
        const response = await RequestService.get(`${ADMIN_USER_ALL}?page=${page}`, true);
        return {
            items: response.data,
            pagesCount: parseInt(response.headers["page-total-count"]),
            totalElements: parseInt(response.headers["page-total-elements"])
        };
    }
);

export const fetchUserInfo = createAsyncThunk(
    "admin/fetchUserInfo",
    async (userId) => {
        const response = await RequestService.get(`${ADMIN_USER}/${userId}`, true);
        return response.data;
    }
);

export const fetchUserInfoByQuery = createAsyncThunk(
    "admin/fetchUserInfoByQuery",
    async (userId) => {
        const response = await RequestService.post(ADMIN_GRAPHQL_USER, { query: userByQuery(userId) }, true);
        return response.data;
    }
);

export const fetchAllUsersByQuery = createAsyncThunk(
    "admin/fetchAllUsersByQuery",
    async () => {
        const response = await RequestService.post(ADMIN_GRAPHQL_USER_ALL, { query: usersByQuery }, true);
        return response.data;
    }
);
