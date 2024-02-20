import { createAsyncThunk } from "@reduxjs/toolkit";

import RequestService from "../../utils/request-service";
import { PERFUMES, PERFUMES_GRAPHQL_PERFUME, REVIEW } from "../../constants/urlConstants";
import { getPerfumeByQuery } from "../../utils/graphql-query/perfume-query";

export const fetchPerfume = createAsyncThunk(
    "perfume/fetchPerfume",
    async (perfumeId, thunkApi) => {
        try {
            const response = await RequestService.get(`${PERFUMES}/${perfumeId}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);

export const fetchReviewsByPerfumeId = createAsyncThunk(
    "perfume/fetchReviewsByPerfumeId",
    async (perfumeId) => {
        const response = await RequestService.get(`${REVIEW}/${perfumeId}`);
        return response.data;
    }
);

// GraphQL thunks
export const fetchPerfumeByQuery = createAsyncThunk(
    "perfume/fetchPerfumeByQuery",
    async (perfumeId, thunkApi) => {
        try {
            const response = await RequestService.post(PERFUMES_GRAPHQL_PERFUME, {
                query: getPerfumeByQuery(perfumeId)
            });
            return response.data.data.perfume;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data);
        }
    }
);
