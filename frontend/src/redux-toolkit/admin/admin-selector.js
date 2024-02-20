import { LoadingStatus }  from "../../types/types";

export const selectAdminState = (state) => state.admin;
export const selectAdminStateUsers = (state) => selectAdminState(state).users;
export const selectAdminStateUser = (state) => selectAdminState(state).user;
export const selectPagesCount = (state) => selectAdminState(state).pagesCount;
export const selectTotalElements = (state) => selectAdminState(state).totalElements;
export const selectAdminStateErrors = (state) => selectAdminState(state).errors;
export const selectIsPerfumeAdded = (state) => selectAdminState(state).isPerfumeAdded;
export const selectIsPerfumeEdited = (state) => selectAdminState(state).isPerfumeEdited;
export const selectIsPerfumeDeleted = (state) => selectAdminState(state).isPerfumeDeleted;
export const selectIsAdminStateLoading = (state) => selectAdminState(state).loadingState === LoadingStatus.LOADING;