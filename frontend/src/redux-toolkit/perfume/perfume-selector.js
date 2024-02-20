import {  LoadingStatus } from "../../types/types";

export const selectPerfumeState = (state) => state.perfume;
export const selectPerfume = (state) => state.perfume.perfume;
export const selectReviews = (state) => state.perfume.reviews;
export const selectPerfumeErrorMessage = (state) => state.perfume.errorMessage;

export const selectLoadingStatus = (state) => selectPerfumeState(state).loadingState;
export const selectIsPerfumeLoading = (state) => selectLoadingStatus(state) === LoadingStatus.LOADING;
export const selectIsPerfumeLoaded = (state) => selectLoadingStatus(state) === LoadingStatus.LOADED;
export const selectPerfumeError = (state) => selectLoadingStatus(state) === LoadingStatus.ERROR;
