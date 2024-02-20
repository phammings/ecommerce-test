import { LoadingStatus } from "../../types/types";

export const selectPerfumesState = (state) => state.perfumes;
export const selectPerfumes = (state) => selectPerfumesState(state).perfumes;
export const selectPagesCount = (state) => selectPerfumesState(state).pagesCount;
export const selectTotalElements = (state) => selectPerfumesState(state).totalElements;
export const selectIsPerfumesLoading = (state) => selectPerfumesState(state).loadingState === LoadingStatus.LOADING;
