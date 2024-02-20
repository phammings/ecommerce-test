import { createAsyncThunk } from "@reduxjs/toolkit";

import RequestService from "../../utils/request-service";
import { USERS_CART } from "../../constants/urlConstants";

export const fetchCart = createAsyncThunk("cart/fetchCart", async (perfumeIds) => {
    const response = await RequestService.post(USERS_CART, perfumeIds);
    return response.data;
});
